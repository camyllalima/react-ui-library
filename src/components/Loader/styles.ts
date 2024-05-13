import styled from 'styled-components';
import { SvgProps } from './types';

export const Svg = styled.svg<SvgProps>`
  animation-name: loading-animation;
  animation-duration: ${({ speed }) => (speed ? speed : '0.5')}s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes loading-animation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
