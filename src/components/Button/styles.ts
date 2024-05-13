import styled from 'styled-components';
import { ButtonCustomStylesProps, ButtonProps, ButtonType } from './types';

/** Objeto com propriedades do botão com apenas texto. */
const textButtonProps = {
  color: '#53565A',
  borderColor: 'transparent',
  background: 'transparent',
  hover: {
    background: '#F6F7F7',
    borderColor: 'transparent',
  },
  disabled: {
    color: '#A5A5A5',
    borderColor: 'transparent',
    background: 'transparent',
  },
};

/** Objeto com propriedades do botão preenchido. */
const containedButtonProps = {
  color: '#FFFFFF',
  borderColor: '#48A4F9',
  background: '#48A4F9',
  hover: {
    background: '#118DFF',
    borderColor: '#118DFF',
  },
  disabled: {
    color: '#FFFFFF',
    borderColor: '#A5A5A5',
    background: '#A5A5A5',
  },
};

/** Objeto com propriedades do botão delineado. */
const outlinedButtonProps = {
  color: '#48A4F9',
  borderColor: '#48A4F9',
  background: 'transparent',
  hover: {
    background: '#D3E7F866',
    borderColor: '#118DFF',
  },
  disabled: {
    color: '#A5A5A5',
    borderColor: '#A5A5A5',
    background: 'transparent',
  },
};

/** Função para obter as propriedades do botão com base no tipo especificado.
 * @param buttonType Tipo do botão ('text', 'contained' ou 'outlined').
 * @returns Propriedades do botão correspondentes ao tipo especificado.
 */
const getButtonProps = (buttonType?: ButtonType) => {
  switch (buttonType) {
    case 'text':
      return textButtonProps;
    case 'contained':
      return containedButtonProps;
    case 'outlined':
      return outlinedButtonProps;
    default:
      return undefined;
  }
};

/** Função para construir os estilos de acordo com o tipo do botão ou usando estilos personalizados.
 * @param buttonType Tipo do botão ('text', 'contained' ou 'outlined').
 * @param customStyles Propriedades de estilo personalizadas.
 * @returns Bloco de estilos de acordo com o tipo do botão ou com estilos personalizados.
 */
const getButtonStyles = (
  buttonType?: ButtonType,
  customStyles?: ButtonCustomStylesProps
): string => {
  if (buttonType !== undefined) {
    const buttonProps = getButtonProps(buttonType);
    if (buttonProps) {
      const { color, borderColor, background, hover, disabled } = buttonProps;
      return `
          color: ${color};
          border: 1px solid ${borderColor};
          background: ${background};
          &:hover:not(:disabled) {
            border: 1px solid ${hover?.borderColor};
            background: ${hover?.background};
            transition: all 0.3s ease;
          }
          &:disabled {
            cursor: initial;
            color: ${disabled?.color || 'inherit'};
            border-color: ${disabled?.borderColor || 'transparent'};
            background: ${disabled?.background || 'transparent'};
          }
        `;
    }
  } else if (customStyles) {
    const { color, borderColor, background, hover, disabled } = customStyles;
    return `
        color: ${color};
        border: 1px solid ${borderColor};
        background: ${background};
        &:hover:not(:disabled) {
          border: 1px solid ${hover?.borderColor};
          background: ${hover?.background};
          transition: all 0.3s ease;
        }
        &:disabled {
          cursor: initial;
          color: ${disabled?.color || 'inherit'};
          border-color: ${disabled?.borderColor || 'transparent'};
          background: ${disabled?.background || 'transparent'};
        }
      `;
  }
  return '';
};

/** Componente de botão estilizado. */
export const ButtonContainer = styled.button<ButtonProps>`
  ${props => getButtonStyles(props?.buttonType, props?.customStyles)}
  display: flex;
  flex-direction: ${({ iconPosition }) =>
    iconPosition === 'end' ? 'row-reverse' : 'row'};
  align-items: center;
  justify-content: center;
  width: ${({ buttonWidth }) => buttonWidth || 'fit-content'};
  font-size: ${({ buttonFontSize }) => buttonFontSize || '0.75rem'};
  font-weight: ${({ buttonFontWeight }) => buttonFontWeight || '600'};
  font-style: normal;
  gap: 0.25rem;
  padding: ${({ buttonPadding }) => buttonPadding || '0.5rem 1rem'};
  border-radius: ${({ buttonBorderRadius }) => buttonBorderRadius || '0.25rem'};
  outline: none;

  &:hover:not(:disabled) {
    cursor: pointer;
  }
`;

/** Componente de ícone estilizado. */
export const ButtonIcon = styled.span``;
