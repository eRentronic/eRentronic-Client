/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

export type AddressType = {
  address1: string;
  address2: string;
  zipCode: string | number;
};

type validFnType = (address: AddressType) => boolean;

type dispatchType = (address: AddressType) => void;

const DEFAULT_ADDRESS: AddressType = {
  address1: '',
  address2: '',
  zipCode: '',
};

const isHouse = (address: any) =>
  !!(address.buildingName === '' && address.apartment === 'N');

const isBuilding = (address: any) => !!(address.bname !== '');

const isApartment = (address: any) =>
  !(isHouse(address) && isBuilding(address));

const effectAddress =
  (validFn: validFnType) => (address: AddressType, dispatch: dispatchType) =>
    validFn(address) && dispatch(address);

const effectHouse = effectAddress(isHouse);
const effectBuilding = effectAddress(isBuilding);
const effectApartment = effectAddress(isApartment);

const getHouseAddress = (address: any): AddressType => ({
  address1: `${address.roadAddress}`,
  address2: '',
  zipCode: address.zonecode,
});

const getBuildingAddress = (address: any): AddressType => ({
  address1: `${address.roadAddress}${address.roadAddress} ${address.buildingName}`,
  address2: '',
  zipCode: address.zonecode,
});

const getApartmentAddress = (address: any): AddressType => ({
  address1: `${address.roadAddress} ${address.buildingName}`,
  address2: '',
  zipCode: address.zonecode,
});

export function useAddressApi() {
  const { daum } = window;
  const [address, setAddress] = useState(DEFAULT_ADDRESS);

  const setHouseAddress = (APIaddress: AddressType) => {
    const houseAddress = getHouseAddress(APIaddress);
    setAddress(houseAddress);
  };

  const setBuildingAddress = (APIaddress: AddressType) => {
    const buildingAddress = getBuildingAddress(APIaddress);

    setAddress(buildingAddress);
  };

  const setApartmentAddress = (APIaddress: AddressType) => {
    const ApartmentAddress = getApartmentAddress(APIaddress);
    setAddress(ApartmentAddress);
  };

  const addressControll = () => {
    new daum.Postcode({
      oncomplete(userAddress: AddressType) {
        effectHouse(userAddress, setHouseAddress);
        effectApartment(userAddress, setApartmentAddress);
        effectBuilding(userAddress, setBuildingAddress);
      },
    }).open();
  };

  const reset = () => {
    setAddress(DEFAULT_ADDRESS);
  };

  const setDetailAddress = (value: string) => {
    setAddress({ ...address, address2: value });
  };

  return { reset, addressControll, address, setDetailAddress };
}
