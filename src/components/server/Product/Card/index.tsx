import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as API from '@/apis/mainProducts';
import { SaleLabel } from '@/components/server/Product/Label';

import * as S from './card.style';
import { Content } from './Content';

type CardProps = {
  productId: number;
};

const getMainProducts = async () => {
  const result = await fetch(`${process.env.MAIN_PRODUCTS}`).then(data =>
    data.json(),
  );
  return result;
};

type normalizedProductType = {
  titles: { [key: number]: string };
  contents: { [key: number]: string };
  images: { [key: number]: string };
  prices: { [key: number]: number };
  rentalPrices: { [key: number]: number };
  rentables: { [key: number]: boolean };
  likes: { [key: number]: boolean };
  inBuckets: { [key: number]: boolean };
  vendors: { [key: number]: { id: number; name: string } };
  salePrice: { [key: number]: number };
  saleRentalPrice: { [key: number]: number };
  discountInfos: {
    [key: number]: {
      id: number;
      title: '이벤트 할인' | '신제품 할인';
      saleRate: string;
    }[];
  };
};

const normalize = (data: API.ContentType[]) => {
  const test: normalizedProductType = {
    titles: {},
    contents: {},
    images: {},
    prices: {},
    rentables: {},
    rentalPrices: {},
    likes: {},
    inBuckets: {},
    vendors: {},
    discountInfos: {},
    salePrice: {},
    saleRentalPrice: {},
  };

  const normalizedData = data.reduce(
    (
      acc,
      {
        product: {
          id,
          title,
          content: productContent,
          imageUrl,
          price,
          rentable,
          rentalPrice,
          like,
          inBucket,
        },
        vendor: { id: vendorID, name },
        discountInfo: { discounts, salePrice, saleRentalPrice },
      },
    ): normalizedProductType => {
      return {
        titles: { ...acc.titles, [id]: title },
        contents: { ...acc.contents, [id]: productContent },
        images: { ...acc.images, [id]: imageUrl },
        prices: { ...acc.prices, [id]: price },
        rentables: { ...acc.rentables, [id]: rentable },
        rentalPrices: { ...acc.rentalPrices, [id]: rentalPrice },
        likes: { ...acc.likes, [id]: like },
        inBuckets: { ...acc.inBuckets, [id]: inBucket },
        vendors: { ...acc.vendors, [id]: { id: vendorID, name } },
        discountInfos: { ...acc.discountInfos, [id]: discounts },
        salePrice: { ...acc.salePrice, [id]: salePrice },
        saleRentalPrice: { ...acc.saleRentalPrice, [id]: saleRentalPrice },
      };
    },
    test,
  );

  return normalizedData;
};

export function Card({ productId }: CardProps) {
  const { data } = useQuery<API.MainProductsType, Error, normalizedProductType>(
    ['normalizedProducts'],
    getMainProducts,
    {
      select: productsList => {
        const { content } = productsList;
        return normalize(content);
      },
    },
  );
  const navigate = useNavigate();

  const {
    titles,
    contents,
    images,
    prices,
    rentables,
    rentalPrices,
    likes,
    inBuckets,
    vendors,
    salePrice,
    saleRentalPrice,
    discountInfos,
  } = data!;

  const [isHover, setIsHover] = useState(false);

  const brandName = vendors[productId].name;
  const totalSaleRate = discountInfos[productId].reduce(
    (acc, { saleRate }): number => acc + +saleRate,
    0,
  );

  const saleLabels = discountInfos[productId].map(({ title, id }) => {
    return <SaleLabel key={id} title={title} />;
  });

  return (
    <S.Wrapper
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <S.StyledCard
        onClick={() => {
          navigate(`detail?id=${productId}`);
        }}
      >
        <Content isDisplay={isHover} content={contents[productId]} />
        <S.ThumbnailContainer>
          <S.Thumbnail alt="제품 썸네일" src={images[productId]} />
        </S.ThumbnailContainer>
        <S.ProductInfoContainer>
          <S.Labels>{saleLabels}</S.Labels>
          <S.Title typography="Regular">{titles[productId]}</S.Title>
          <S.Brand forwardedAs="h4" color="grey3" typography="Light">
            {brandName}
          </S.Brand>
          <S.PriceInfo>
            <S.DiscountInfo>
              <S.CurrentPrice color="secondary">
                {prices[productId]}
              </S.CurrentPrice>
              {!!discountInfos[productId].length && (
                <S.SaledPrice typography="Thin" color="grey3" forwardedAs="del">
                  {salePrice[productId]}
                </S.SaledPrice>
              )}
            </S.DiscountInfo>
            {!!discountInfos[productId].length && (
              <S.DiscountRate color="warning">{totalSaleRate}%</S.DiscountRate>
            )}
          </S.PriceInfo>
        </S.ProductInfoContainer>
      </S.StyledCard>
    </S.Wrapper>
  );
}
