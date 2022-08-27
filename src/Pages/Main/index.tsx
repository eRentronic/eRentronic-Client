import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useResetRecoilState, useRecoilState, useRecoilValue } from 'recoil';

import * as API from '@/apis/mainProducts';
import { Footer } from '@/components/client/Footer';
import { Header } from '@/components/client/Header';
import { Panel } from '@/components/client/Panel';
import { SideTab } from '@/components/Filter/SideTab/SideTab';
import { Card } from '@/components/Product/Card/Card';
import { MainInput } from '@/components/Search/MainInput';
import { popUpOpenState } from '@/recoils/popUp/popUp';
import { productsStore } from '@/recoils/Products/products';
import { productIds } from '@/recoils/Products/selectors/ids';

import * as S from './style';

const getMainProducts = async () => {
  const result = await fetch(`${process.env.MAIN_PRODUCTS}`).then(data =>
    data.json(),
  );
  return result;
};

export function Main() {
  const closeWholePopUp = useResetRecoilState(popUpOpenState);
  const { data } = useQuery<API.MainProductsType, Error>(
    ['productQueryKey'],
    getMainProducts,
  );

  const [productsList, setProductsList] = useRecoilState(productsStore);
  const ids = useRecoilValue(productIds);

  const mainContents = ids.map(id => <Card productId={id} />);

  useEffect(() => {
    if (data) {
      const { content } = data;
      setProductsList([...productsList, ...content]);
    }
  }, [data]);

  return (
    <S.Wrapper onClick={closeWholePopUp}>
      <S.StyledHeader>
        <Header />
      </S.StyledHeader>
      <S.StyledMain>
        <S.SearchSection>여기는</S.SearchSection>
        <MainInput />
        <S.MainContents>{mainContents}</S.MainContents>
      </S.StyledMain>
      <S.StyledAside>
        <SideTab />
      </S.StyledAside>
      <Panel />
      <Footer />
    </S.Wrapper>
  );
}
