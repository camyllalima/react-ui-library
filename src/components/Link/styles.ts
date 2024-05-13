import styled from 'styled-components';
import { LinkProps } from './types';

/** Componente de link estilizado. */
export const StyledLink = styled.a<LinkProps>`
  margin-right: 0 !important;
  width: ${({ width }) => width || 'initial'};
  text-decoration: none;
  color: ${({ color }) => color} !important;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'transparent'};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};

  &:hover:not(:disabled) {
    text-decoration: underline;
  }
`;
