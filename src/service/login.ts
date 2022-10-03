import { CautionMessage } from '@/components/common/Caution/types';

const SHORT_ID_LENGHT = 8;
const LONG_ID_LENGTH = 20;
const SHORT_PASSWORD_LENGTH = 4;
const LONG_PASSWORD_LENGHT = 13;

const validShort = (limit: number) => (target: string) =>
  target.length <= limit ? 'tooShort' : false;

const validLong = (limit: number) => (target: string) =>
  target.length >= limit ? 'tooLong' : false;

const validWrongChar =
  (limitFunc: (value: string) => boolean) => (target: string) =>
    limitFunc(target) ? false : 'wrongChar';

const validSamePassword = ({
  first,
  second,
}: {
  first: string;
  second: string;
}) => (first === second ? false : 'wrongPassword');

const getErrorMessages =
  <T>(...validFuncs: Array<(target: T) => CautionMessage | false>) =>
  (target: T) => {
    const errorMessages = validFuncs.map(validFunc => validFunc(target));
    return errorMessages;
  };

const idShortValid = validShort(SHORT_ID_LENGHT);
const idLongValid = validLong(LONG_ID_LENGTH);

const passwordShortValid = validShort(SHORT_PASSWORD_LENGTH);
const passwordLongValid = validLong(LONG_PASSWORD_LENGHT);
const passwordReg =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]/;
const passwordRegValid = passwordReg.test.bind(passwordReg);
const passwordWrongCharValid = validWrongChar(passwordRegValid);

const nameReg = /^[ㄱ-ㅎ|가-힣|]+$/;
const nameRegValid = nameReg.test.bind(nameReg);

const nameWrongCharValid = validWrongChar(nameRegValid);

export const idValid = getErrorMessages(idShortValid, idLongValid);

export const passwordValid = getErrorMessages(
  passwordShortValid,
  passwordLongValid,
);

export const signInPasswordValid = getErrorMessages(
  passwordShortValid,
  passwordLongValid,
  passwordWrongCharValid,
);

export const nameValid = getErrorMessages(nameWrongCharValid);

export const confirmPasswordValid = getErrorMessages(validSamePassword);
