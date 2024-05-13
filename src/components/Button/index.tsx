import React from 'react';
import { ButtonContainer, ButtonIcon } from './styles';
import { ButtonProps } from './types';
import { Loader } from '../Loader';

export const Button: React.FC<ButtonProps> = ({
  children = 'Button',
  icon,
  iconPosition = 'start',
  buttonType = 'contained',
  customStyles,
  buttonWidth,
  buttonFontSize,
  buttonFontWeight,
  buttonPadding,
  buttonBorderRadius,
  type,
  onClick,
  isDisabled,
  isLoading,
  loadingTextButton,
  loadindSize = 14,
  ...props
}) => {
  return (
    <ButtonContainer
      disabled={isDisabled}
      buttonType={buttonType}
      customStyles={customStyles}
      buttonWidth={buttonWidth}
      buttonFontSize={buttonFontSize}
      buttonFontWeight={buttonFontWeight}
      buttonPadding={buttonPadding}
      buttonBorderRadius={buttonBorderRadius}
      type={type}
      onClick={onClick}
      iconPosition={iconPosition}
      {...props}
    >
      {isLoading && <Loader size={loadindSize} />}
      {icon && <ButtonIcon>{icon}</ButtonIcon>}
      {isLoading ? loadingTextButton : children}
    </ButtonContainer>
  );
};
