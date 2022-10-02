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
  const result = await axios.post(URL, updatedData);
  return result;
};
