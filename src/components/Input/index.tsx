import React from 'react';
import { InputContainer, InputElement } from './styles';
import { InputProps } from './types';

export const Input: React.FC<InputProps> = ({
  icon,
  placeholder,
  value,
  maxLength,
  onChange,
  width = '6rem',
  height = '1.5rem',
  backgroundColor,
  borderColor,
  focusBorderColor,
  hoverBorderColor,
  color = '#8f9194',
  fontSize,
  fontWeight,
}) => {
  return (
    <InputContainer
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      focusBorderColor={focusBorderColor}
      hoverBorderColor={hoverBorderColor}
    >
      {icon}
      <InputElement
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onPaste={onChange}
        enterKeyHint={'enter'}
        maxLength={maxLength}
        width={width}
        height={height}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
      />
    </InputContainer>
  );
};
