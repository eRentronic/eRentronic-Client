import { Icon } from '@/components/common';
import * as S from '@/components/server/Product/Card/Content.style';

type ContentProps = {
  isDisplay: boolean;
  content: string;
};

export function Content({ isDisplay, content }: ContentProps) {
  return (
    <S.Wrapper isDisplay={isDisplay}>
      <S.ContentMain>
        <S.Info color="white" typography="Thin">
          {content}
        </S.Info>
        <S.UserSelect>
          <Icon iconSrc="HEART" />
          <Icon iconSrc="SHOPPING_CART" />
        </S.UserSelect>
      </S.ContentMain>
    </S.Wrapper>
  );
}
