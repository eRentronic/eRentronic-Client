import axios from 'axios';
// type LoginFoarmType = { name: string; password: string };
// type SigninFormType = {
//   name: string;
//   email: string;
//   password: string;
//   address: {
//     fullAddress: string;
//     address1: string;
//     address2: string;
//     zipCode: string;
//   };
// };
export type HeaderType = {
  'Access-Token': string;
  withCredentials?: boolean;
};

export const postData = async <T>(
  URL: string,
  updatedData: T,
  headers?: HeaderType,
) => {
  try {
    const data = await axios.post<T>(URL, updatedData, {
      headers,
    });
    return data;
  } catch (e) {
    throw new Error('주문 에러');
  }
};

export const getData =
  <T>(path: string) =>
  async () => {
    const result = await axios.get(path);
    return result.data as T;
  };
