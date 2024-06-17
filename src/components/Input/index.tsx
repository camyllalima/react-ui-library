import React from 'react';
import { IconContainer, InputContainer, InputElement } from './styles';
import { InputProps } from './types';
import { theme } from '../../themes';

export const Input: React.FC<InputProps> = ({
  icon,
  iconPosition,
  paddingIcon = `${theme.space.x0} ${theme.space['x0.25rem']}`,
  placeholder = 'input',
  value,
  maxLength,
  onChange,
  onPaste,
  width = theme.space['x6rem'],
  height = theme.space['x1.5rem'],
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
