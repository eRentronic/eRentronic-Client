import { Dig } from '@/utils/helperType';

export type CautionProps = {
  content?: '아이디' | '비밀번호' | '주소';
  message:
    | 'tooShort'
    | 'tooLong'
    | 'wrongChar'
    | 'alreadyExist'
    | 'wrongAddress'
    | 'wrongPassword'
    | 'wrongName'
    | 'wrongPostNum';

  // TODO: keyof typeof 로 해보기!
};
export type MessageType = {
  [key: string]: string;
};

export type CautionMessage = Dig<CautionProps, 'message'>;

export type CautionContent = Dig<CautionProps, 'content'>;
