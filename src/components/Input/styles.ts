import styled, { css } from 'styled-components';
import { InputProps, InputStatus } from './types';
import { theme } from '../../themes';

/** Cores baseadas no status do input */
const statusColors: Record<InputStatus, string> = {
  success: theme.colors.green['30'],
  error: theme.colors.red['20'],
  warning: theme.colors.yellow['10'],
};

/** Função para obter a cor baseada no status */
const getStatusColor = (status?: InputStatus): string => {
  if (status && statusColors[status]) {
    return statusColors[status];
  }
  return theme.colors.neutral['20'];
};

/** Comporta toda estrutura do componente. */
export const InputContainer = styled.button<InputProps>`
  display: flex;
  flex-direction: ${({ iconPosition }) =>
    iconPosition === 'end' ? 'row-reverse' : 'row'};
  align-items: center;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || theme.colors.neutral.white};
  border: thin solid
    ${({ borderColor }) => borderColor || theme.colors.neutral['20']};
  border-radius: ${theme.space['x0.25rem']};
  padding-left: ${theme.space.x0};
  padding-right: ${theme.space.x0};

  ${({ status }) => css`
    border-color: ${getStatusColor(status)};
  `}

  &:focus-within {
    border-color: ${({ focusBorderColor }) =>
      focusBorderColor || theme.colors.blue['10']};
  }

  &:hover:not(:focus-within):not(:disabled) {
    border-color: ${({ hoverBorderColor }) =>
      hoverBorderColor || theme.colors.neutral['200']};
  }

  &:disabled {
    background-color: ${theme.colors.neutral['110']};
  }
`;

/** Comporta toda estrutura do ícone. */
export const IconContainer = styled.div<InputProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: ${({ paddingIcon }) => paddingIcon};
`;

/** Responsável por estilizar o input. */
export const InputElement = styled.input<InputProps>`
  width: 100%;
  height: 100%;
  color: ${({ color }) => color || theme.colors.neutral['200']};
  border: none;
  font-size: ${({ fontSize }) => fontSize || theme.typography.fontSize.sm.x3};
  font-weight: ${({ fontWeight }) =>
    fontWeight || theme.typography.fontWeight['500']};
  line-height: ${theme.space.x1rem};
  letter-spacing: 0em;
  text-align: left;
  border-radius: ${theme.space['x0.25rem']};

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: ${theme.colors.neutral['110']};
    color: ${theme.colors.neutral['100']};
  }
`;
