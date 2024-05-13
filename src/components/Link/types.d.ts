import { ReactNode } from 'react';

/** Proriedades do componente de Link */
export interface LinkProps {
  /** Conteúdo do link */
  children: ReactNode;

  /** URL para onde o link deve redirecionar */
  href: string;

  /** Cor do texto do link */
  color?: string;

  /** Tamanho da fonte do link */
  fontSize?: string;

  /** Peso da fonte do link */
  fontWeight?: string;

  /** Cor de fundo do link */
  backgroundColor?: string;

  /** Largura do link */
  width?: string;

  /** Alvo do link */
  target?: string;

  /** Função a ser executada ao clicar no link */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;

  ref?: any;
}
