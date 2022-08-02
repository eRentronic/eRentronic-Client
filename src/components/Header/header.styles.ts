import { ElementType } from 'react';
import styled from 'styled-components';

import { Text } from '../common/Text';
import { TextProps } from '../common/Text/types';

export const Layout = styled.div`
  width: 100%;
  display: flex;
  margin: 0 10%;
`;

export const Logo = styled.a`
  font-weight: 900;
  font-size: 40px;
  margin-right: 30px;
`;

export const ContentsLayOut = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLeft = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavRight = styled.div`
  display: flex;
  gap: 10px;
`;

// TODO: 스타일드 컴포넌트 사용할때 컴포넌트 확장은 안되고 스타일드 컴포넌트만 확장성공한거 기록할것
// TODO: 컴포넌트 자체를 스타일을 변경하고 싶은 상황임 타개필요
// 해결 완료 클래스네임을 전달해주어야했음
// 참고링크 : https://thebook.io/080203/ch09/04/02-01/
export const NavText = styled(Text)`
  cursor: pointer;
  color: 'red';
`;
