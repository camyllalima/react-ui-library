/** Propriedades dos ícones global para todos os SVGs. */
export interface IconsProps {
  /** Largura do ícone. */
  width?: string;

  /** Altura do ícone. */
  height?: string;

  /** Cor do ícone. */
  color?: string;

  /** Função de click no ícone. */
  onClick?: () => void;
}
