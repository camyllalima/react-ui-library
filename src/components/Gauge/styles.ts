import styled from 'styled-components';
import { GaugeProps } from './types';
import { theme } from '../../themes';

/** Componente de gauge estilizado. */
export const GaugeContainer = styled.div<GaugeProps>`
  display: flex;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  user-select: none;

  #gauge {
    transform: rotate(176.5deg);
    stroke-linecap: round;
  }

  #score {
    font-size: ${theme.typography.fontSize.lg.x7};
    transform: rotate(-176.5deg);
    transform-origin: ${theme.space.x200px} ${theme.space.x200px};
    font-weight: ${theme.typography.fontWeight['700']};
  }
  #gauge-value {
    font-size: ${theme.typography.fontSize.lg.x3};
    transform: rotate(-176.5deg);
    transform-origin: ${theme.space.x200px} ${theme.space.x200px};
    font-weight: ${theme.typography.fontWeight['400']};
  }
`;
