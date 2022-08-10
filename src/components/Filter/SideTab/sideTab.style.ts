import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  cursor: pointer;
`;

export const CategoryWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  /* background-color: ${({ theme }) => theme.pallete.grey5}; */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
