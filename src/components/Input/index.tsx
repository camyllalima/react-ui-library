import React from 'react';
import { IconContainer, InputContainer, InputElement } from './styles';
import { InputProps } from './types';

export const Input: React.FC<InputProps> = ({
  icon,
  iconPosition,
  paddingIcon = '0 0.25rem',
  placeholder = 'input',
  value,
  maxLength,
  onChange,
  onPaste,
  width = '6rem',
  height = '1.5rem',
  backgroundColor,
  borderColor,
  focusBorderColor,
  hoverBorderColor,
  color,
  fontSize,
  fontWeight,
  disabled,
  status,
}) => {
  return (
    <InputContainer
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      focusBorderColor={focusBorderColor}
      hoverBorderColor={hoverBorderColor}
      iconPosition={iconPosition}
      disabled={disabled}
      status={status}
    >
      {icon && <IconContainer paddingIcon={paddingIcon}>{icon}</IconContainer>}
      <InputElement
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onPaste={onPaste}
        enterKeyHint={'enter'}
        maxLength={maxLength}
        width={width}
        height={height}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        disabled={disabled}
      />
    </InputContainer>
  );
};
