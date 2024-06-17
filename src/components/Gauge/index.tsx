import React from 'react';
import { GaugeColors, GaugeProps } from './types';
import { GaugeContainer } from './styles';
import { theme } from '../../themes';

export const Gauge: React.FC<GaugeProps> = ({
  score = 1000,
  multiColor = true,
  colors = {
    low: theme.colors.red['10'],
    middle: theme.colors.yellow['10'],
    good: theme.colors.green['10'],
    high: theme.colors.green['20'],
  },
  width = '150px',
  height = '140px',
  maxScore = 1000,
  checkpoints = {
    low: 250,
    middle: 500,
    good: 750,
  },
}) => {
  /**
   * Função responsável por calcular a porcentagem de preenchimento do score.
   * @param score - Pontuação de 0 à 1000.
   * @param colors - Cores do componente.
   */
  const calculatePercentage = (score: number, colors?: GaugeColors) => {
    const calculateFillPercentage = (min: number, max: number) => {
      if (score >= max) {
        return 100;
      } else if (score <= min) {
        return 0;
      } else {
        return ((score - min) / (max - min)) * 100;
      }
    };

    const getColorForScoreRange = (score: number, colors?: GaugeColors) => {
      if (score >= 750) {
        return colors?.high;
      } else if (score >= 500) {
        return colors?.good;
      } else if (score >= 250) {
        return colors?.middle;
      } else {
        return colors?.low;
      }
    };

    return {
      low: calculateFillPercentage(0, checkpoints?.low),
      middle: calculateFillPercentage(checkpoints?.low, checkpoints?.middle),
      good: calculateFillPercentage(checkpoints?.middle, checkpoints?.good),
      high: calculateFillPercentage(checkpoints?.good, maxScore),
      color: getColorForScoreRange(score, colors),
    };
  };

  const { low, middle, good, high, color } = calculatePercentage(score, colors);

  return (
    <GaugeContainer width={width} height={height}>
      <svg id="gauge" viewBox="0 0 400 400">
        <circle
          r="150"
          cx="50%"
          cy="50%"
          stroke={theme.colors.neutral['80']}
          stroke-width="15"
          stroke-dasharray="100, 950"
          fill="none"
        ></circle>
        <circle
          r="150"
          cx="50%"
          cy="50%"
          stroke={theme.colors.neutral['80']}
          stroke-width="15"
          stroke-dasharray="100, 950"
          stroke-dashoffset="-130"
          fill="none"
        ></circle>
        <circle
          r="150"
          cx="50%"
          cy="50%"
          stroke={theme.colors.neutral['80']}
          stroke-width="15"
          stroke-dasharray="100, 950"
          stroke-dashoffset="-260"
          fill="none"
        ></circle>
        <circle
          r="150"
          cx="50%"
          cy="50%"
          stroke={theme.colors.neutral['80']}
          stroke-width="15"
          stroke-dasharray="100, 950"
          stroke-dashoffset="-390"
          fill="none"
        ></circle>

        <circle
          id="low"
          r="150"
          cx="50%"
          cy="50%"
          stroke={multiColor ? colors?.low : color}
          stroke-width={low > 0 ? 15 : 0}
          stroke-dasharray={`${low}, 950`}
          fill="none"
        ></circle>
        <circle
          id="middle"
          r="150"
          cx="50%"
          cy="50%"
          stroke={multiColor ? colors?.middle : color}
          stroke-width={middle > 0 ? 15 : 0}
          stroke-dasharray={`${middle}, 950`}
          stroke-dashoffset="-130"
          fill="none"
        ></circle>
        <circle
          id="good"
          r="150"
          cx="50%"
          cy="50%"
          stroke={multiColor ? colors?.good : color}
          stroke-width={good > 0 ? 15 : 0}
          stroke-dasharray={`${good}, 950`}
          stroke-dashoffset="-260"
          fill="none"
        ></circle>
        <circle
          id="high"
          r="150"
          cx="50%"
          cy="50%"
          stroke={multiColor ? colors?.high : color}
          stroke-width={high > 0 ? 15 : 0}
          stroke-dasharray={`${high}, 950`}
          stroke-dashoffset="-390"
          fill="none"
        ></circle>

        <text
          id="score"
          x="200"
          y="140"
          fill={theme.colors.neutral['30']}
          text-anchor="middle"
          dominant-baseline="central"
        >
          {score ? score : '--'}
        </text>
        <text
          id="gauge-value"
          x="200"
          y="200"
          fill={theme.colors.neutral['90']}
          text-anchor="middle"
          dominant-baseline="central"
        >
          de {maxScore}
        </text>
      </svg>
    </GaugeContainer>
  );
};
