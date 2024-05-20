import { InputHTMLAttributes, ReactNode } from 'react';

/** Propriedades do componente Input. */
interface InputProps extends InputHTMLAttributes {
  /** Ícone do input. */
  icon?: ReactNode;

  /** Placeholder do input. */
  placeholder?: string;

  /** Valor do input. */
  value?: string;

  /** Tamanho máximo de caracteres do input. */
  maxLength?: string;

  /** Evento de mudança de valor no input. */
  onChange?: (value) => void;

  /** Tamanho do input. */
  width?: string;

  /** Altura do input. */
  height?: string;

  /** Cor de fundo do input. */
  backgroundColor?: string;

  /** Borda do input. */
  borderColor?: string;

  /** Cor da borda quando o input estiver selecionado. */
  focusBorderColor?: string;

  /** Cor da borda ao passar o mouse sobre o input. */
  hoverBorderColor?: string;

  /** Cor do texto do input. */
  color?: string;

  /** Tamanho da fonte do input. */
  fontSize?: string;

  /** Peso da fonte do input. */
  fontWeight?: string;
}
