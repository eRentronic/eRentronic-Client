import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { HeaderType } from '@/apis/api';
import * as API from '@/apis/mainProducts';
import { Text } from '@/components/common';
import { Caution } from '@/components/common/Caution';
import * as S from '@/components/server/ProductDetail/OrderForm/index.style';
import { useAddressApi } from '@/hooks/useAddressApi';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useMutationPost } from '@/hooks/useMutationPost';
import { modalStore } from '@/recoils/modal/modal';
import { stopEventDelivery } from '@/utils/utils';

import { Info } from './Info';
import { DefaultOptionsState, Option } from './option';

const getInfos = async (path: string) => {
  const result = await axios.get<API.ProductDetail>(path);
  return result.data;
};

const defaultOptions: DefaultOptionsState = {
  keyboardSwitch: '',
  amount: 1,
};

type OrderResponseState = {
  id: number;
  message: string;
};
const defaultOrderResponse: OrderResponseState = {
  id: 0,
  message: '',
};

const getValue = (e: ChangeEvent<HTMLInputElement>) => e.target.value;

const URL = `${process.env.ORDER_PRODUCTS}`;

export function Purchase() {
  const [isDisplay, setIsDisplay] = useState(false); // 모달
  const [isClicked, setIsClicked] = useRecoilState(modalStore); // 모달
  const [orderResponse, setOrderResponse] = useState(defaultOrderResponse);
  const [options, setOptions] = useState(defaultOptions);
  const location = useLocation();
  const param = new URLSearchParams(location.search);
  const productID = param.get('id');
  const { address, reset, addressControll, setDetailAddress } = useAddressApi();

  const detailPath = `${process.env.PRODUCT}/${productID}`;
  // const recommendPath = `${process.env.MAIN_PRODUCTS}/${productID}/recommendations`;
  // 서버 구현중
  const { data } = useQuery<API.ProductDetail, AxiosError>(['getInfos'], () =>
    getInfos(detailPath),
  );

  const { value } = useLocalStorage('loginState');
  const { loginToken } = value;
  // TODO: value를 string으로 바꿔보기!
  const headers: HeaderType = {
    'Access-Token': loginToken,
    withCredentials: true,
  };

  useEffect(() => {
    setTimeout(() => {
      setOptions(defaultOptions);
      reset();
      setOrderResponse(defaultOrderResponse);
      setIsClicked(false);
    }, 2000);
  }, [orderResponse]);

  if (!data) {
    throw new Error('데이터 없음');
  }

  const { product, discountInfoResponse, vendor, keyboardSwitches } = data;
  const {
    id: productId,
    price: productTotalPrice,
    imageUrl,
    title,
    quantity,
  } = product;
  const { keyboardSwitch, amount } = options;
  const { message } = orderResponse;
  const { name: brandName } = vendor;
  const { salePrice, discounts } = discountInfoResponse;
  const totalPrice = salePrice * amount;
  const salePriceWithComma = salePrice.toLocaleString();
  const finalPrice = (salePrice * amount).toLocaleString();
  const { address1, address2, zipCode } = address;

  const infoProps = {
    imageUrl,
    title,
    brandName,
    salePriceWithComma,
    discounts,
    productTotalPrice,
  };

  const { mutate } = useMutationPost(
    URL,
    {
      purchases: [
        {
          productId,
          quantity: amount,
          productTotalPrice,
        },
      ],
      rentals: [],
      address: {
        fullAddress: address1 + address2,
        address1,
        address2,
        zipCode,
      },
      totalPrice,
    },
    headers,
  );

  const closeModal = (e: MouseEvent) => {
    e.stopPropagation();
    setIsClicked(!isClicked);
    setIsDisplay(false);
  };

  const postOrder = () => {
    mutate();
  };

  const optionProps = {
    keyboardSwitches,
    keyboardSwitch,
    amount,
    quantity,
    options,
    setOptions,
    address,
    address2,
    addressControll,
    setDetailAddress,
  };

  const orderResponseModal = !!message && (
    <S.OrderConfirmation>{message}</S.OrderConfirmation>
  );

  const isFormFilled =
    !Object.keys(address).find(key => !address[key]) &&
    !Object.keys(options).find(key => !options[key]);

  return (
    <S.Dimmed isClicked={isClicked} onClick={closeModal}>
      <S.PurchaseWrap
        onClick={e => {
          stopEventDelivery(e);
          setIsDisplay(false);
        }}
        isClicked={isClicked}
      >
        {orderResponseModal}
        <Info info={infoProps} />
        <Option option={optionProps} />
        <S.PriceAndButton>
          <S.DiscountedPrice>{`총 ${finalPrice} 원`}</S.DiscountedPrice>
          <S.PurchaseButton
            disabled={!isFormFilled}
            isFormFilled={isFormFilled}
            onClick={postOrder}
          >
            <Text>구매</Text>
          </S.PurchaseButton>
        </S.PriceAndButton>
      </S.PurchaseWrap>
    </S.Dimmed>
  );
}
