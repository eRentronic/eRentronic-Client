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

export const postData = async <T>(URL: string, updatedData: T) => {
  const { data } = await axios.post<T>(URL, updatedData);
  return data;
};
