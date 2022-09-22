import { ElementType, Ref, forwardRef } from 'react';
import styled, { CSSObject } from 'styled-components';

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

const DEFAULT_ICON_STYLE: CSSObject = {
  position: 'absolute',
  top: 0,
  left: 0,
};

function UserInput<incomeElementType extends ElementType = 'input'>(
  { size, iconSrc, ...props }: UserInputProps<incomeElementType>,
  ref: Ref<any>,
) {
  const StyledIcon = iconSrc && styled(ICONS[iconSrc])(DEFAULT_ICON_STYLE);

  return (
    <StyledLabel htmlFor="userInfo">
      <StyledInput inputSize={size} iconSrc={iconSrc} ref={ref} {...props} />
      {StyledIcon && <StyledIcon width="16px" height="16px" />}
    </StyledLabel>
  );
}

const StyledInput = styled.input<StyledInputProps>(
  ({ inputSize = 'medium', theme }) => ({
    border: 'none',
    width: DEFAULT_INPUT_STYLE.width[inputSize],
    borderBottom: `1px solid ${theme.pallete.black}`,
    outline: 'none',
  }),
);

const StyledLabel = styled.label`
  position: relative;
`;

const forwardedUserInput = forwardRef(UserInput) as typeof UserInput;

export { forwardedUserInput as UserInput };
