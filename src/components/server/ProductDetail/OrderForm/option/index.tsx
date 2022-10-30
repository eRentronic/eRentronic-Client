import { ChangeEvent, Dispatch, useState } from 'react';
import styled from 'styled-components';

import { Text } from '@/components/common';
import { Caution } from '@/components/common/Caution';
import { TextProps } from '@/components/common/Text/types';
import { DefaultAddressState } from '@/hooks/useAddressApi';

type OptionType = {
  amount: number;
  keyboardSwitch: string;
  keyboardSwitches: {
    id: number;
    name: string;
  }[];
  quantity: number;
  options: DefaultOptionsState;
  setOptions: Dispatch<DefaultOptionsState>;
  address: DefaultAddressState;
  address2: string;
  addressControll: () => void;
  setDetailAddress: (value: string) => void;
};

type OptionProps = {
  option: OptionType;
};

export type DefaultOptionsState = {
  [key: string]: string | number;
  keyboardSwitch: string;
  amount: number;
};

export function Option({ option }: OptionProps) {
  const {
    amount,
    keyboardSwitch,
    keyboardSwitches,
    quantity,
    options,
    setOptions,
    address,
    address2,
    addressControll,
    setDetailAddress,
  } = option;
  const [isDisplay, setIsDisplay] = useState(false); // 모달
  const ADDRESS = '주소';

  const setAddressErrorMsg = (inputValue: string) =>
    inputValue.length < 5 ? 'wrongAddress' : '';
  const errMessage = setAddressErrorMsg(address2);

  const optionLists = keyboardSwitches.map(({ id, name }) => (
    <SwitchOption
      key={id}
      onClick={() => {
        setOptions({ ...options, keyboardSwitch: name });
      }}
    >
      {name}
    </SwitchOption>
  ));

  const increaseAmount = () => {
    if (amount < quantity) {
      setOptions({ ...options, amount: amount + 1 });
    }
  };

  const decreaseAmount = () => {
    if (amount > 1) {
      setOptions({ ...options, amount: amount - 1 });
    }
  };

  const onChangeAddress2 = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = getValue(e);
    setDetailAddress(inputValue);
  };

  const optionList = isDisplay && (
    <OptionList isDisplay={isDisplay}>{optionLists}</OptionList>
  );
  const chooseAmount = keyboardSwitch && (
    <AmountWrap>
      <PlusBtn onClick={increaseAmount}>+</PlusBtn>
      <Text styles={{ fontSize: '15px' }}>{amount}</Text>
      <MinusBtn onClick={decreaseAmount}>-</MinusBtn>
    </AmountWrap>
  );

  const userInfo = amount && keyboardSwitch && (
    <UserInfo>
      <UserInfoTitle>사용자정보</UserInfoTitle>
      <UserInfoContent>
        주소
        <ChangeAddressBtn type="button" onClick={addressControll}>
          {address.address1 ? '주소변경' : '주소선택'}
        </ChangeAddressBtn>
      </UserInfoContent>
      <Address1>{address.address1}</Address1>
      <Address2
        placeholder="상세주소를 입력해주세요"
        onChange={onChangeAddress2}
      />
      {errMessage && <Caution content={ADDRESS} message={errMessage} />}
    </UserInfo>
  );

  const getValue = (e: ChangeEvent<HTMLInputElement>) => e.target.value;

  return (
    <>
      <OptionZone>
        <DetailOptionBtn
          onClick={e => {
            setIsDisplay(true);
            e.stopPropagation();
          }}
        >
          <Text typography="Light" styles={{ fontSize: '9px' }}>
            option
          </Text>
        </DetailOptionBtn>
        <Text typography="Light">{keyboardSwitch}</Text>
        {optionList}
        {chooseAmount}
      </OptionZone>
      {userInfo}
    </>
  );
}
const OptionZone = styled.section`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  gap: 10px;
  padding: 15px;
  flex-direction: column;
  background-color: #fef8d8;
  border-radius: 10px;
`;

const DetailOptionBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 5px;
  width: fit-content;
  border-radius: 10px;

  border: none;
  background-color: ${({ theme }) => theme.pallete.secondary};
  &:hover {
    transform: scale(0.9);
  }
  transition: 0.2s;
`;

const OptionList = styled.ul<{ isDisplay: boolean }>`
  position: absolute;
  left: 20%;
  display: ${({ isDisplay }) => (isDisplay ? 'flex' : 'none')};
  border: 1px solid black;
  width: fit-content;
  border-radius: 10px;
`;

const SwitchOption = styled.li`
  padding: 5px 10px;
`;

const AmountWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AmountBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
const MinusBtn = styled(AmountBtn)``;

const PlusBtn = styled(AmountBtn)``;

const UserInfo = styled.div`
  width: 100%;
  background-color: #dde9d1;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const UserInfoTitle = styled(Text)<TextProps<'span'>>`
  font-size: 15px;
`;
const UserInfoContent = styled(Text)`
  color: ${({ theme }) => theme.pallete.grey3};
  font-size: 10px;
`;
const ChangeAddressBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.pallete.grey4};
`;
const Address1 = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 22px; // Address2랑 똑같이 20px로 했는데 크기가 작음. input 여백 설정이 남아있는듯
  border: 1px solid ${({ theme }) => theme.pallete.grey3};
  border-radius: 3px;
  font-size: 10px;
  padding-left: 5px;
  background: ${({ theme }) => theme.pallete.white};
`;
const Address2 = styled.input`
  padding: 0;
  height: 20px;
  border: 1px solid ${({ theme }) => theme.pallete.grey3};
  border-radius: 3px;
  font-size: 10px;
  padding-left: 5px;
`;
