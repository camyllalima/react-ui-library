import React from 'react';

/** Propriedades do componente Gauge. */
export interface GaugeProps {
  /** Pontuação atingida */
  score?: number;

  /** Define se o componente terá cores múltiplas. */
  multiColor?: boolean;

  /** Cores do componente. */
  colors?: GaugeColors;

  /** Largura do componente. */
  width?: string;

  /** Altura do componente. */
  height?: string;

  /** Pontuação máxima do componente. */
  maxScore?: number;

  /** Pontos de referência do componente. */
  checkpoints?: GaugeCheckpoints;
}

/** Cores do componente Gauge. */
type GaugeColors = {
  /** Cor do primeiro checkpoint. */
  low: string;

  /** Cor do segundo checkpoint. */
  middle: string;

  /** Cor do terceiro checkpoint. */
  good: string;

  /** Cor do quarto checkpoint. */
  high: string;
};

/** Pontos de referência do componente Gauge. */
type GaugeCheckpoints = {
  /** Pontuação referente ao primeiro checkpoint. */
  low: number;

  /** Pontuação referente ao segundo checkpoint. */
  middle: number;

  /** Pontuação referente ao terceiro checkpoint. */
  good: number;
};
