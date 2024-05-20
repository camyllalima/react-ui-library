import styled from 'styled-components';
import { InputProps } from './types';

/** Comporta toda estrutura do componente. */
export const InputContainer = styled.button<InputProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  background-color: ${({ backgroundColor }) => backgroundColor || '#ffffff'};
  border-color: ${({ borderColor }) => borderColor || '#e5e6e6'};
  border-width: thin;
  border-style: solid;
  border-radius: 0.25rem;

  &:focus-within {
    border-color: ${({ focusBorderColor }) => focusBorderColor || '#48a4f9'};
  }

  &:hover:not(:focus-within) {
    border-color: ${({ hoverBorderColor }) => hoverBorderColor || '#252728'};
  }
`;

/** Responsável por estilizar o input. */
export const InputElement = styled.input<InputProps>`
  width: 100%;
  height: 100%;
  color: ${({ color }) => color || '#8f9194'};
  border: none;
  font-size: ${({ fontSize }) => fontSize || '0.75rem'};
  font-weight: ${({ fontWeight }) => fontWeight || '500'};
  line-height: 1rem;
  letter-spacing: 0em;
  text-align: left;

  &:focus {
    outline: none;
  }
`;
