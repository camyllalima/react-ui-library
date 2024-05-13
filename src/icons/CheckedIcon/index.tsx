import React from 'react';
import { IconsProps } from '../types';

export const CheckedIcon: React.FC<IconsProps> = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10.0025" cy="10" r="6.0025" fill={color} />
      <path
        d="M7.63281 10.2261L9.07808 11.6714L9.06874 11.662L12.3294 8.40134"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
