import styled, { css } from 'styled-components';
import { InputProps, InputStatus } from './types';

/** Cores baseadas no status do input */
const statusColors: Record<InputStatus, string> = {
  success: '#00c639',
  error: '#ed5568',
  warning: '#FFC700',
};

/** Função para obter a cor baseada no status */
const getStatusColor = (status?: InputStatus): string => {
  if (status && statusColors[status]) {
    return statusColors[status];
  }
  return 'transparent';
};

/** Comporta toda estrutura do componente. */
export const InputContainer = styled.button<InputProps>`
  display: flex;
  flex-direction: ${({ iconPosition }) =>
    iconPosition === 'end' ? 'row-reverse' : 'row'};
  align-items: center;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  background-color: ${({ backgroundColor }) => backgroundColor || '#ffffff'};
  border: thin solid ${({ borderColor }) => borderColor || '#e5e6e6'};
  border-radius: 0.25rem;
  padding-left: 0;
  padding-right: 0;

  ${({ status }) => css`
    border-color: ${getStatusColor(status)};
  `}

  &:focus-within {
    border-color: ${({ focusBorderColor }) => focusBorderColor || '#48a4f9'};
  }

  &:hover:not(:focus-within):not(:disabled) {
    border-color: ${({ hoverBorderColor }) => hoverBorderColor || '#252728'};
  }

  &:disabled {
    background-color: #f5f5f5;
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
  color: ${({ color }) => color || '#252728'};
  border: none;
  font-size: ${({ fontSize }) => fontSize || '0.75rem'};
  font-weight: ${({ fontWeight }) => fontWeight || '500'};
  line-height: 1rem;
  letter-spacing: 0em;
  text-align: left;
  border-radius: 0.25rem;

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: #f5f5f5;
    color: #8f9194;
  }
`;
