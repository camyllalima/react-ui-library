import React, { ButtonHTMLAttributes } from 'react';

/** Propriedades do Toggle. */
export interface ToggleProps extends ButtonHTMLAttributes {
  /** Indica se o Toggle está ativo ou inativo. */
  isActive?: boolean;

  /** Indica se o Toggle está desabilitado. */
  isDisabled?: boolean;

  /** Texto do label. */
  textLabel?: string;

  /** Largura do Toggle. */
  width?: string;

  /** Altura do Toggle. */
  height?: string;

  /** Cor do Toggle quando ativo. */
  colorActive?: string;

  /** Cor do Toggle quando inativo. */
  colorInactive?: string;

  /** Cor do background do hover quando ativo. */
  activeHoverBackground?: string;

  /** Cor do background do hover quando inativo. */
  inactiveHoverBackground?: string;

  /** Cor do background da bola. */
  ballColor?: string;

  /** Tamanho da bola. */
  ballSize?: string;

  /** Posição da bola quando ativo. */
  ballPositionActive?: string;

  /** Posição da bola quando inativo. */
  ballPositionInactive?: string;

  /** Posição do label. */
  labelPosition?: LabelPosition;

  /** Tamanho da fonte do label. */
  labelFontSize?: string;

  /** Cor da fonte do label. */
  labelColor?: string;

  /** Peso da fonte do label. */
  labelFontWeight?: string;

  /** Ação de click no toggle. */
  onClick?: () => void;
}

/** Posição da label. */
type LabelPosition = 'top' | 'right' | 'bottom' | 'left';
