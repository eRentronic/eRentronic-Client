import { useNavigate } from 'react-router-dom';

import { Card } from '@/components/server/Product/Card/';
import { useMainProducts } from '@/hooks/useMainProducts';
import { normalizeProduct, Discount } from '@/service/product';
import { mergeObjectArr } from '@/utils/utils';

import * as S from './style';

type MainContentsProps = {
  idList: number[];
  setIntersectTarget: React.Dispatch<
    React.SetStateAction<HTMLElement | null | undefined>
  >;
};

type normalizedProductType = {
  title: { [key: number]: string };
  content: { [key: number]: string };
  imageUrl: { [key: number]: string };
  price: { [key: number]: number };
  rentalPrice: { [key: number]: number };
  rentable: { [key: number]: boolean };
  like: { [key: number]: boolean };
  inBucket: { [key: number]: boolean };
  vendor: { [key: number]: { id: number; name: string } };
  salePrice: { [key: number]: number };
  saleRentalPrice: { [key: number]: number };
  discountInfo: {
    [key: number]: {
      discounts: Discount;
      salePrice: number;
      saleRentalPrice: number;
    };
  };
};

export function MainContents({
  idList,
  setIntersectTarget,
}: MainContentsProps) {
  const navigate = useNavigate();
  const { infiniteData: data } = useMainProducts<normalizedProductType>({
    select: rawData => {
      const { pages, pageParams } = rawData;
      const productsDataLists = pages.map(productData =>
        normalizeProduct(productData),
      );

      return { pages: productsDataLists, pageParams };
    },
    mergePages: rawData => {
      const keys = Object.keys(rawData!.pages[0]);
      const result = mergeObjectArr(rawData?.pages, keys);

      return result;
    },
  })!;
  const {
    title,
    content,
    imageUrl,
    price,
    rentable,
    rentalPrice,
    like,
    inBucket,
    vendor,
    discountInfo,
  } = data;

  const onClickCard = (productId: number) => () => {
    navigate(`/detail?id=${productId}`);
  };

  const cardPropsList = idList.map(id => ({
    id,
    title: title[id],
    content: content[id],
    imageUrl: imageUrl[id],
    price: price[id],
    rentable: rentable[id],
    rentalPrice: rentalPrice[id],
    like: like[id],
    inBucket: inBucket[id],
    vendor: vendor[id],
    discountInfo: discountInfo[id],
    onClickCard: onClickCard(id),
  }));

  const cardList = cardPropsList.map((props, idx) => {
    if (cardPropsList.length - 1 === idx) {
      return <Card {...props} ref={setIntersectTarget} />;
    }
    return <Card {...props} />;
  });
  return <S.MainContents>{cardList}</S.MainContents>;
}
