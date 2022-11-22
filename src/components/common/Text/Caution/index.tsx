import { Text } from '@/components/common/Text';
import {
  CautionProps,
  MessageType,
} from '@/components/common/Text/Caution/types';

import { DEFAULT_CAUTION } from './constants';

export function Caution({ content, message }: CautionProps) {
  const cautions: MessageType = content
    ? {
        ...DEFAULT_CAUTION,
        tooShort: `${content}가 너무 짧습니다`,
        tooLong: `${content}가 너무 깁니다`,
      }
    : DEFAULT_CAUTION;

  const getCautionMessage = (errorType: string) => {
    return cautions[errorType];
  };

  const cautionMessage = getCautionMessage(message);

  return (
    <Text typography="Light" color="warning" styles={{ fontSize: '8px' }}>
      {cautionMessage}
    </Text>
  );
}
