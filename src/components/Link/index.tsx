import React from 'react';
import { StyledLink } from './styles';
import { LinkProps } from './types';
import { theme } from '../../themes';

export const Link: React.FC<LinkProps> = ({
  children = 'Link',
  href = '/',
  color = theme.colors.neutral.black,
  fontSize = theme.typography.fontSize.sm.x5,
  fontWeight = theme.typography.fontWeight['500'],
  backgroundColor = theme.colors.neutral.transparent,
  width = 'fit-content',
  target,
  onClick,
  ref,
  ...props
}) => {
  return (
    <StyledLink
      onClick={onClick}
      color={color}
      ref={ref}
      target={target || '_blank'}
      fontSize={fontSize}
      fontWeight={fontWeight}
      href={href}
      {...props}
    >
      {children}
    </StyledLink>
  );
};
