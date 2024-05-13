import React, { useState } from 'react';
import {
  ToggleContainer,
  ToggleBall,
  ToggleWrapper,
  ToggleLabel,
} from './styles';
import { ToggleProps } from './types';

export const Toggle: React.FC<ToggleProps> = ({
  textLabel = 'Label',
  width = '38px',
  height = '20px',
  colorActive = '#48A4F9',
  colorInactive = '#E5E6E6',
  isDisabled = false,
  activeHoverBackground = '#118DFF',
  inactiveHoverBackground = '#D3D3D3',
  ballColor = '#FFFFFF',
  ballSize = '0.75rem',
  ballPositionActive = '22px',
  ballPositionInactive = '4px',
  labelPosition = 'left',
  labelFontSize = '0.75rem',
  labelColor = '#252728',
  labelFontWeight = '500',
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <ToggleWrapper
      {...props}
      onClick={handleToggle}
      labelPosition={labelPosition}
    >
      <ToggleLabel
        labelFontSize={labelFontSize}
        labelColor={labelColor}
        labelFontWeight={labelFontWeight}
      >
        {textLabel}
      </ToggleLabel>
      <ToggleContainer
        width={width}
        height={height}
        isActive={isActive}
        colorActive={colorActive}
        colorInactive={colorInactive}
        activeHoverBackground={activeHoverBackground}
        inactiveHoverBackground={inactiveHoverBackground}
        disabled={isDisabled}
        type="button"
        {...props}
      >
        <ToggleBall
          isActive={isActive}
          ballColor={ballColor}
          ballPositionActive={ballPositionActive}
          ballPositionInactive={ballPositionInactive}
          ballSize={ballSize}
        />
      </ToggleContainer>
    </ToggleWrapper>
  );
};
