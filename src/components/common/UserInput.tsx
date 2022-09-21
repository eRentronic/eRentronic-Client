import { ElementType, Ref, forwardRef } from 'react';
import styled from 'styled-components';

import * as ICONS from '@/assets/icons';
import { OverRidableProps } from '@/utils/helperType';

const DEFAULT_INPUT_STYLE = {
  width: { small: '150px', medium: '220px', large: '450px' },
};

type UserInputBaseProps = {
  size?: 'small' | 'medium' | 'large';
  iconSrc?: keyof typeof ICONS;
};

type UserInputProps<incomeElementType extends ElementType> = OverRidableProps<
  incomeElementType,
  UserInputBaseProps
>;

type StyledInputProps = {
  inputSize?: 'small' | 'medium' | 'large';
};

function UserInput<incomeElementType extends ElementType = 'input'>(
  { size, iconSrc, ...props }: UserInputProps<incomeElementType>,
  ref: Ref<any>,
) {
  return <StyledInput inputSize={size} ref={ref} {...props} />;
}

const StyledInput = styled.input<StyledInputProps>(
  ({ inputSize = 'medium', theme }) => ({
    width: DEFAULT_INPUT_STYLE.width[inputSize],
    borderBottom: '1px solid theme.pallete.Black',
  }),
);

const forwardedUserInput = forwardRef(UserInput) as typeof UserInput;

export { forwardedUserInput as UserInput };
