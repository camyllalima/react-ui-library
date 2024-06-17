import styled from 'styled-components';
import { LinkProps } from './types';
import { theme } from '../../themes';

/** Componente de link estilizado. */
export const StyledLink = styled.a<LinkProps>`
  margin-right: ${theme.space.x0} !important;
  width: ${({ width }) => width || 'initial'};
  text-decoration: none;
  color: ${({ color }) => color} !important;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || theme.colors.neutral.transparent};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};

  &:hover:not(:disabled) {
    text-decoration: underline;
  }
`;
