import { MessageType } from './types';

export const DEFAULT_CAUTION: MessageType = {
  tooShort: '',
  tooLong: '',
  wrongChar: '허용되지 않는 문자를 사용했습니다',
  alreadyExist: '이미 사용되고 있는 아이디입니다',
  wrongAddress: '잘못된 형식의 주소입니다. 오타가 없는지 확인해보세요',
  wrongPassword: '비밀번호가 일치하지 않습니다',
  wrongName: '유효하지 않은 이름입니다',
  wrongPostNum: '유효하지 않은 우편번호입니다',
};
