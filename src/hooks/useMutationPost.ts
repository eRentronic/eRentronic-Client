/* eslint-disable @typescript-eslint/ban-types */
import { useMutation } from '@tanstack/react-query';

import { HeaderType, postData } from '@/apis/api';

// TODO: Funtion타입 활용해도 되는가?
export const useMutationPost = <
  RequestBody,
  onSuccessCallBackFn extends Function,
  onErrorCallbackFn extends Function,
>(
  URL: string,
  info: RequestBody,
  {
    header,
    onSuccessCallback,
    onErrorCallback,
  }: {
    header?: HeaderType;
    onSuccessCallback?: onSuccessCallBackFn;
    onErrorCallback?: onErrorCallbackFn;
  },
) => {
  return useMutation(() => postData(URL, info, header), {
    onSuccess: data => {
      if (onSuccessCallback) {
        onSuccessCallback(data);
      }
    },
    onError: error => {
      if (onErrorCallback) {
        onErrorCallback(error);
      }
    },
  });
};
