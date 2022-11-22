import styled from 'styled-components';

import { Text } from '@/components/common';

export const DetailWrap = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 100vh; */
  padding: 42px;
  margin: 0 auto;
`;

export const Title = styled(Text)`
  width: 100%;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 30px;
`;

export const InfoWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 50px;
`;

export const InfoLeft = styled.div`
  width: 370px;
  display: flex;
  flex-direction: column;
`;

export const ImgSlide = styled.div`
  width: 100%;
  position: relative;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SlideImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const SlideBtnsWrap = styled.div`
  position: absolute;
  top: 45%;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

export const SmallImgs = styled.div`
  width: 100%;
  height: 65px;
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;

export const SmallImg = styled.img`
  width: 100px;
  height: 100%;
`;

export const BtnsWrap = styled.div`
  width: 100%;
  height: 56px;
  margin-top: 40px;
  display: flex;
  gap: 32px;
`;

export const InfoBtn = styled.button`
  width: 150px;
  height: 100%;
  font-family: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  background: ${({ theme }) => theme.pallete.primary};
`;

export const BtnText = styled(Text)``;

export const ReviewBtn = styled(InfoBtn)``;

export const InfoRight = styled.div`
  width: 390px;
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Info = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DetailInfoWrap = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const DetailContent = styled(Text)`
  color: ${({ theme }) => theme.pallete.normalFont};
  display: flex;
  /* justify-content: space-between; */
`;

export const DetailStatus = styled(Text)`
  color: ${({ theme }) => theme.pallete.normalFont};
  display: flex;
  justify-content: center;
`;
export const DetailTitle = styled(DetailContent)``;

export const Price = styled(DetailContent)``;

export const RentalPrice = styled(DetailContent)``;

export const Switches = styled(DetailContent)``;

export const RentalBtn = styled.button`
  width: 90%;
  height: 56px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const DecisionBtns = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
`;

export const BuyBtn = styled(RentalBtn)``;

export const DetailInfoImg = styled.img<{ showDetail: boolean }>`
  display: ${({ showDetail }) => (showDetail ? 'block' : 'none')};
  width: 100%;
`;

export const MoreItemsTitle = styled.div`
  width: 100%;
  font-weight: 600;
  margin: 30px 0;
`;

export const MoreItems = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  height: 130px;
`;

export const ExtraItem = styled.img`
  width: 20%;
  height: 100%;
`;
