import { ChangeEvent } from 'react';

import { UserInput } from '@/components/common/Input/User';
import { DefaultAddressState } from '@/hooks/useAddressApi';

type AddressFormProps = {
  address: DefaultAddressState;
  addressControll: () => void;
  onChageAddressDetail: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function AddressForm({
  address,
  addressControll,
  onChageAddressDetail,
}: AddressFormProps) {
  const { address1, address2, zipCode } = address;
  return (
    <>
      <UserInput
        size="large"
        placeholder="주소"
        onClick={addressControll}
        value={address1}
        style={{ caretColor: 'transparent' }}
      />
      <UserInput
        size="large"
        placeholder="상세주소"
        onChange={onChageAddressDetail}
        value={address2}
      />
      <UserInput size="small" placeholder="우편번호" value={zipCode} disabled />
    </>
  );
}
