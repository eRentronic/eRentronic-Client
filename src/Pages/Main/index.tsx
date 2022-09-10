import { useQuery } from '@tanstack/react-query';
import { useResetRecoilState } from 'recoil';

import * as API from '@/apis/mainProducts';
import { SideTab } from '@/components/Filter/SideTab/SideTab';
import { MainInput } from '@/components/Search/MainInput';
import { Card } from '@/components/server/Product/Card/';
import { popUpOpenState } from '@/recoils/popUp/popUp';

import * as S from './style';

const getMainProducts = async () => {
  const result = await fetch(`${process.env.MAIN_PRODUCTS}`).then(data =>
    data.json(),
  );
  return result;
};

const getIds = (productData: API.ContentType[]) => {
  const productIdList = productData.map(({ product: { id } }) => id);
  return productIdList;
};

export function Main() {
  const closeWholePopUp = useResetRecoilState(popUpOpenState);
  const { data: ID } = useQuery<API.MainProductsType, Error, number[]>(
    ['productQueryKey'],
    getMainProducts,
    {
      select: data => {
        const pure = data.content;
        return getIds(pure);
      },
    },
  );
  const mainContents = ID?.map(id => <Card productId={id} />);

  return (
    <S.Wrapper onClick={closeWholePopUp}>
      <S.StyledMain>
        <S.SearchSection>여기는</S.SearchSection>
        <MainInput />
        <S.MainContents>{mainContents}</S.MainContents>
      </S.StyledMain>
      <S.StyledAside>
        <SideTab />
      </S.StyledAside>
    </S.Wrapper>
  );
}
