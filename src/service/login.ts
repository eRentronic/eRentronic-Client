import { CautionMessage } from '@/components/common/Caution/types';

const shortValid = (limit: number) => (target: string) =>
  target.length <= limit ? 'tooShort' : false;

const longValid = (limit: number) => (target: string) =>
  target.length >= limit ? 'tooLong' : false;

const wrongChar = (limitFunc: (value: string) => boolean) => (target: string) =>
  limitFunc(target) ? false : 'wrongChar';

const getErrorMessages =
  (...validFuncs: Array<(target: string) => CautionMessage | false>) =>
  (target: string) => {
    const errorMessages = validFuncs.map(validFunc => validFunc(target));

    return errorMessages;
  };

// TODO: 매직 넘버 없애기
const idShortValid = shortValid(8);
const idLongValid = longValid(20);
export const idValid = getErrorMessages(idShortValid, idLongValid);

const passwordShortValid = shortValid(4);
const passwordLongValid = longValid(13);
export const passwordValid = getErrorMessages(
  passwordShortValid,
  passwordLongValid,
);
