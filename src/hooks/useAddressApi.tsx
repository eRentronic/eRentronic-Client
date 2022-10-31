/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

export type DefaultAddressState = {
  [key: string]: string | number;
  address1: string;
  address2: string;
  zipCode: string;
};

type validFnType = (address: any) => boolean;

type setterFnType = (address: any) => void;

const DEFAULT_ADDRESS: DefaultAddressState = {
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
  (validFn: validFnType) => (address: any, setterFn: setterFnType) =>
    validFn(address) && setterFn(address);

const effectHouse = effectAddress(isHouse);
const effectBuilding = effectAddress(isBuilding);
const effectApartment = effectAddress(isApartment);

const getHouseAddress = (address: any) => ({
  address1: address.roadAddress,
  address2: '',
  zipCode: address.zonecode,
});

const getBuildingAddress = (address: any) => ({
  address1: `${address.roadAddress}${address.roadAddress} ${address.buildingName}`,
  address2: '',
  zipCode: address.zonecode,
});

const getApartmentAddress = (address: any) => ({
  address1: address.roadAddress + address.buildingName,
  address2: '',
  zipCode: address.zonecode,
});

export function useAddressApi() {
  const { daum } = window;
  const [address, setAddress] = useState(DEFAULT_ADDRESS);

  const setHouseAddress = (APIaddress: any) => {
    const houseAddress = getHouseAddress(APIaddress);
    setAddress(houseAddress);
  };

  const setBuildingAddress = (APIaddress: any) => {
    const buildingAddress = getBuildingAddress(APIaddress);

    setAddress(buildingAddress);
  };

  const setApartmentAddress = (APIaddress: any) => {
    const ApartmentAddress = getApartmentAddress(APIaddress);
    setAddress(ApartmentAddress);
  };

  const addressControll = () => {
    new daum.Postcode({
      oncomplete(userAddress: any) {
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
