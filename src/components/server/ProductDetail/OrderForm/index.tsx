import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { getData, HeaderType } from '@/apis/api';
import * as API from '@/apis/mainProducts';
import { Modal } from '@/components/common/Modal';
import { Decide } from '@/components/server/ProductDetail/OrderForm/Decide/Decide';
import * as S from '@/components/server/ProductDetail/OrderForm/index.style';
import { Info } from '@/components/server/ProductDetail/OrderForm/Info';
import {
  DefaultOptionsState,
  Option,
  OptionType,
} from '@/components/server/ProductDetail/OrderForm/Option';
import { useAddressApi } from '@/hooks/useAddressApi';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useMutationPost } from '@/hooks/useMutationPost';
import { purchaseModalStore } from '@/recoils/modal/Purchase';

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
  const setIsClicked = useSetRecoilState(purchaseModalStore);
  const [isOptionDisplay, setIsOptionDisplay] = useState(false);
  const [orderResponse, setOrderResponse] = useState(defaultOrderResponse);
  const [options, setOptions] = useState(defaultOptions);
  const location = useLocation();
  const param = new URLSearchParams(location.search);
  const productID = param.get('id');
  const { address, reset, addressControll, setDetailAddress } = useAddressApi();

  const detailPath = `${process.env.PRODUCT}/${productID}`;
  // const recommendPath = `${process.env.MAIN_PRODUCTS}/${productID}/recommendations`;
  // 서버 구현중
  const { data } = useQuery<API.ProductDetail, AxiosError>(
    ['getInfos'],
    getData<API.ProductDetail>(detailPath),
  );

  const { value } = useLocalStorage('loginState');
  const { loginToken } = value;
  // TODO: value를 string으로 바꿔보기!
  const headers: HeaderType = {
    'Access-Token': loginToken,
    // withCredentials: true,
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
    { header: headers },
  );

  const isFormFilled =
    !Object.keys(address).find(key => !address[key]) &&
    !Object.keys(options).find(key => !options[key]);

  const postOrder = () => {
    mutate();
  };
  const onClickPlusBtn = () => {
    if (amount < quantity) {
      increaseAmount();
    }
  };
  const onClickMinusBtn = () => {
    if (amount > 1) {
      decreaseAmount();
    }
  };
  const increaseAmount = () => {
    setOptions({ ...options, amount: amount + 1 });
  };

  const decreaseAmount = () => {
    setOptions({ ...options, amount: amount - 1 });
  };

  const setAddressErrorMsg = (inputValue: string) =>
    inputValue.length < 5 ? 'wrongAddress' : '';
  const errMessage = setAddressErrorMsg(address2);

  const onChangeAddress2 = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = getValue(e);
    setDetailAddress(inputValue);
  };

  const getOptionHandler = (name: string) => () => {
    setOptions({ ...options, keyboardSwitch: name });
  };

  const onClickDetailOptionBtn = (e: MouseEvent) => {
    setIsOptionDisplay(true);
    e.stopPropagation();
  };

  const infoProps = {
    imageUrl,
    title,
    brandName,
    salePriceWithComma,
    discounts,
    productTotalPrice,
  };
  const optionProps: OptionType = {
    state: {
      keyboardSwitches,
      keyboardSwitch,
      amount,
      address1,
      isOptionDisplay,
      errMessage,
    },
    func: {
      addressControll,
      setDetailAddress,
      onClickDetailOptionBtn,
      onClickPlusBtn,
      onClickMinusBtn,
      onChangeAddress2,
      getOptionHandler,
    },
  };
  const decideProps = {
    state: {
      finalPrice,
      isFormFilled,
    },
    func: {
      postOrder,
    },
  };

  const orderResponseModal = !!message && (
    <S.OrderConfirmation>{message}</S.OrderConfirmation>
  );

  return (
    <Modal store={purchaseModalStore} width="50%">
      {orderResponseModal}
      <Info info={infoProps} />
      <Option option={optionProps} />
      <Decide decide={decideProps} />
    </Modal>
  );
}
