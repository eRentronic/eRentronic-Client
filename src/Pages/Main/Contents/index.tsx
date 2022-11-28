import { useNavigate } from 'react-router-dom';

import { Card } from '@/components/server/Product/Card/';
import { useMainProducts } from '@/hooks/useMainProducts';
import { normalizeProduct, Discount } from '@/service/product';

import * as S from './style';

type MainContentsProps = { idList: number[] };

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

export function MainContents({ idList }: MainContentsProps) {
  const navigate = useNavigate();
  const data = useMainProducts<normalizedProductType>({
    select: normalizeProduct,
  });

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
  } = data as normalizedProductType;

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

  const cardList = cardPropsList.map(props => <Card {...props} />);
  return <S.MainContents>{cardList}</S.MainContents>;
}
