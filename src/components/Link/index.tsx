import React from 'react';
import { StyledLink } from './styles';
import { LinkProps } from './types';

export const Link: React.FC<LinkProps> = ({
  children = 'Link',
  href = '/',
  color = '#000',
  fontSize = '14px',
  fontWeight = '600',
  backgroundColor = 'transparent',
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
