import styled from 'styled-components';
import { LabelPosition, ToggleProps } from './types';

/** Função para obter a posição do label com base no tipo especificado.
 * @param labelPosition Posição do label ('top', 'right', 'bottom' ou 'left').
 */
const getLabelPosition = (labelPosition?: LabelPosition) => {
  switch (labelPosition) {
    case 'top':
      return 'column';
    case 'right':
      return 'row-reverse';
    case 'bottom':
      return 'column-reverse';
    case 'left':
      return 'row';
    default:
      return 'row';
  }
};

/** Envolve e posiciona os elementos do Toggle e o label. */
export const ToggleWrapper = styled.div<ToggleProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  flex-direction: ${props => getLabelPosition(props?.labelPosition)};
`;

/** Comporta e posiciona o Toogle e a animação. */
export const ToggleContainer = styled.button<ToggleProps>`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 4px;
  background-color: ${({ isActive, colorActive, colorInactive }) =>
    isActive ? colorActive : colorInactive};
  border-radius: 16px;
  transition: background-color 0.2s;
  border: ${({ isActive, colorActive, colorInactive }) =>
    isActive ? colorActive : colorInactive};

  &:hover:not(:disabled) {
    cursor: pointer;
    background-color: ${({
      isActive,
      activeHoverBackground,
      inactiveHoverBackground,
    }) => (isActive ? activeHoverBackground : inactiveHoverBackground)};
    border: ${({ isActive, activeHoverBackground, inactiveHoverBackground }) =>
      isActive ? activeHoverBackground : inactiveHoverBackground};
  }

  &:disabled {
    opacity: 0.7;
  }
`;

/** Estilização da bola do Toogle. */
export const ToggleBall = styled.span<ToggleProps>`
  position: absolute;
  left: ${({ isActive, ballPositionActive, ballPositionInactive }) =>
    isActive ? ballPositionActive : ballPositionInactive};
  display: block;
  width: ${({ ballSize }) => ballSize};
  height: ${({ ballSize }) => ballSize};
  background-color: #ffffff;
  border-radius: 50%;
  transition: left 0.3s;
`;

/** Estilização do label. */
export const ToggleLabel = styled.label<ToggleProps>`
  font-size: ${({ labelFontSize }) => labelFontSize};
  font-style: normal;
  font-weight: ${({ labelFontWeight }) => labelFontWeight};
  line-height: normal;
  color: ${({ labelColor }) => labelColor};
`;
