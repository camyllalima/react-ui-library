import { InputHTMLAttributes, ReactNode } from 'react';

/** Propriedades do componente Input. */
interface InputProps extends InputHTMLAttributes {
  /** Ícone do input. */
  icon?: ReactNode;

  /** Posição do ícone no input. */
  iconPosition?: InputIconPosition;

  /** Espaçamento interno do ícone. */
  paddingIcon?: string;

  /** Placeholder do input. */
  placeholder?: string;

  /** Valor do input. */
  value?: string;

  /** Tamanho máximo de caracteres do input. */
  maxLength?: string;

  /** Evento de mudança de valor no input. */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

  /** Evento de colar no input. */
  onPaste?: React.ClipboardEventHandler<HTMLInputElement>;

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

  /** Indica se o input está desabilitado. */
  disabled?: boolean;

  /** Indica o status do input. */
  status?: InputStatus;
}

/** Posição do ícone no input. */
type InputIconPosition = 'start' | 'end';

/** Status do input. */
type InputStatus = 'success' | 'error' | 'warning';
