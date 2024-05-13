import { ButtonHTMLAttributes, ReactNode } from 'react';

/** Propriedades do botão de ação. */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Conteúdo do botão. */
  children?: ReactNode;

  /** Ícone do botão. */
  icon?: ReactNode;

  iconPosition?: IconPosition;

  /** Tipo do botão. Poderá escolher entre os valores 'text' | 'contained' | 'outlined' | undefined. */
  buttonType?: ButtonType;

  /** Estilos personalizados do botão. */
  customStyles?: ButtonCustomStylesProps;

  /** Largura do botão. Caso queira utilizar um valor fixo. */
  buttonWidth?: string;

  /** Tamanho da fonte do botão. */
  buttonFontSize?: string;

  /** Peso da fonte do botão. */
  buttonFontWeight?: string;

  /** Espaçamento interno do botão. */
  buttonPadding?: string;

  /** Raio da borda do botão. */
  buttonBorderRadius?: string;

  /** Tipo do botão. */
  type?: 'button' | 'reset' | 'submit';

  /** Ação de click no botão. */
  onClick?: ((values) => void) | (() => void);

  /** Indica se o botão deve ser desabilitado. */
  isDisabled?: boolean;

  /** Indica se o botão está carregando. */
  isLoading?: boolean;

  /** Texto do botão quando está no estado de carregamento */
  loadingTextButton?: string;

  /** Tamanho do loader. */
  loadindSize?: number;
}

/** Tipos dos botões de ação. */
type ButtonType = 'text' | 'contained' | 'outlined' | undefined;

/** Posição do ícone no botão. */
type IconPosition = 'start' | 'end'; 

/** Propriedades de estilo personalizadas do botão. */
interface ButtonCustomStylesProps {
  /** Cor do texto do botão. */
  color: string;

  /** Cor da borda do botão. */
  borderColor: string;

  /** Cor de fundo do botão. */
  background: string;

  /** Cor da borda e do fundo do botão quando o mouse está sobre ele. */
  hover?: {
    borderColor: string;
    background: string;
  };

  /** Estilos do botão quando ele está desabilitado. */
  disabled?: {
    cursor: string;
    color: string;
    borderColor: string;
    background: string;
  };
}
