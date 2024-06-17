import styled from 'styled-components';
import { ButtonCustomStylesProps, ButtonProps, ButtonType } from './types';
import { theme } from '../../themes';

/** Objeto com propriedades do botão com apenas texto. */
const textButtonProps = {
  color: `${theme.colors.neutral['30']}`,
  borderColor: `${theme.colors.neutral.transparent}`,
  background: `${theme.colors.neutral.transparent}`,
  hover: {
    background: `${theme.colors.neutral['60']}`,
    borderColor: `${theme.colors.neutral.transparent}`,
  },
  disabled: {
    color: `${theme.colors.neutral['50']}`,
    borderColor: `${theme.colors.neutral.transparent}`,
    background: `${theme.colors.neutral.transparent}`,
  },
};

/** Objeto com propriedades do botão preenchido. */
const containedButtonProps = {
  color: `${theme.colors.neutral.white}`,
  borderColor: `${theme.colors.blue['10']}`,
  background: `${theme.colors.blue['10']}`,
  hover: {
    background: `${theme.colors.blue['20']}`,
    borderColor: `${theme.colors.blue['20']}`,
  },
  disabled: {
    color: `${theme.colors.neutral.white}`,
    borderColor: `${theme.colors.neutral['50']}`,
    background: `${theme.colors.neutral['50']}`,
  },
};

/** Objeto com propriedades do botão delineado. */
const outlinedButtonProps = {
  color: `${theme.colors.blue['10']}`,
  borderColor: `${theme.colors.blue['10']}`,
  background: `${theme.colors.neutral.transparent}`,
  hover: {
    background: `${theme.colors.neutral['70']}`,
    borderColor: `${theme.colors.blue['20']}`,
  },
  disabled: {
    color: `${theme.colors.neutral['50']}`,
    borderColor: `${theme.colors.neutral['50']}`,
    background: `${theme.colors.neutral.transparent}`,
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
          border: ${theme.space.x1px} solid ${borderColor};
          background: ${background};
          &:hover:not(:disabled) {
            border: ${theme.space.x1px} solid ${hover?.borderColor};
            background: ${hover?.background};
            transition: all 0.3s ease;
          }
          &:disabled {
            cursor: initial;
            color: ${disabled?.color || 'inherit'};
            border-color: ${disabled?.borderColor ||
              `${theme.colors.neutral.transparent}`};
            background: ${disabled?.background ||
              `${theme.colors.neutral.transparent}`};
          }
        `;
    }
  } else if (customStyles) {
    const { color, borderColor, background, hover, disabled } = customStyles;
    return `
        color: ${color};
        border: ${theme.space.x1px} solid ${borderColor};
        background: ${background};
        &:hover:not(:disabled) {
          border: ${theme.space.x1px} solid ${hover?.borderColor};
          background: ${hover?.background};
          transition: all 0.3s ease;
        }
        &:disabled {
          cursor: initial;
          color: ${disabled?.color || 'inherit'};
          border-color: ${disabled?.borderColor ||
            `${theme.colors.neutral.transparent}`};
          background: ${disabled?.background ||
            `${theme.colors.neutral.transparent}`};
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
  font-size: ${({ buttonFontSize }) =>
    buttonFontSize || theme.typography.fontSize.sm.x3};
  font-weight: ${({ buttonFontWeight }) =>
    buttonFontWeight || theme.typography.fontWeight['600']};
  font-style: normal;
  gap: ${theme.space['x0.25rem']};
  padding: ${({ buttonPadding }) =>
    buttonPadding || `${theme.space['x0.5rem']} ${theme.space['x1rem']}`};
  border-radius: ${({ buttonBorderRadius }) =>
    buttonBorderRadius || theme.space['x0.25rem']};
  outline: none;

  &:hover:not(:disabled) {
    cursor: pointer;
  }
`;

/** Componente de ícone estilizado. */
export const ButtonIcon = styled.span``;
