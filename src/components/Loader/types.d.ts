import React from 'react';
/** Propriedades do loader. */
interface LoaderProps {
  /** Cor do loader. */
  color?: string;

  /** Tamanho do loader. */
  size?: number;

  /** Velocidade do loader. */
  speed?: number;
}

/** Propriedades de estilo do svg do loader. */
interface SvgProps {
  /** Velociadade da animação do svg. */
  speed?: number;
}
