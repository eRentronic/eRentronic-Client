import { MessageType } from './types';

export const DEFAULT_CAUTION: MessageType = {
  tooShort: '',
  tooLong: '',
  wrongChar: '허용되지 않는 문자를 사용했습니다',
  alreadyExist: '이미 사용되고 있는 아이디입니다',
  wrongAddress: '잘못된 형식의 주소입니다. 오타가 없는지 확인해보세요',
};
