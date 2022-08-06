import styled from 'styled-components';

import { Text, Icon } from '@/components/common';

type ContentProps = {
  isDisplay: boolean;
  content: string;
};

export function Content({ isDisplay, content }: ContentProps) {
  return (
    <Wrapper isDisplay={isDisplay}>
      <ContentMain>
        <Info color="white" typography="Thin">
          {content}
        </Info>
        <UserSelect>
          <Icon iconSrc="HEART" />
          <Icon iconSrc="SHOPPING_CART" />
        </UserSelect>
      </ContentMain>
    </Wrapper>
  );
}

type WrapperProps = {
  isDisplay: boolean;
};

const Wrapper = styled.div<WrapperProps>`
  display: ${({ isDisplay }) => (isDisplay ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
`;

const ContentMain = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Info = styled(Text)`
  display: -webkit-box;
  -webkit-line-clamp: 12;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const UserSelect = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  bottom: 0;
`;
