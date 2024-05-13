import styled from 'styled-components';
import { GaugeProps } from './types';

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
    font-size: 60px;
    transform: rotate(-176.5deg);
    transform-origin: 200px 200px;
    font-weight: 700;
  }
  #gauge-value {
    font-size: 35px;
    transform: rotate(-176.5deg);
    transform-origin: 200px 200px;
    font-weight: 400;
  }
`;
