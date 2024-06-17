import React, { useState } from 'react';
import {
  ToggleContainer,
  ToggleBall,
  ToggleWrapper,
  ToggleLabel,
} from './styles';
import { ToggleProps } from './types';
import { theme } from '../../themes';

export const Toggle: React.FC<ToggleProps> = ({
  textLabel = 'Label',
  width = theme.space.x38px,
  height = theme.space['x1.25rem'],
  colorActive = '#48A4F9',
  colorInactive = '#E5E6E6',
  isDisabled = false,
  activeHoverBackground = '#118DFF',
  inactiveHoverBackground = '#D3D3D3',
  ballColor = theme.colors.neutral.white,
  ballSize = theme.space['x0.75rem'],
  ballPositionActive = theme.space.x22px,
  ballPositionInactive = theme.space['x0.25rem'],
  labelPosition = 'left',
  labelFontSize = theme.typography.fontSize.sm.x3,
  labelColor = theme.colors.neutral['200'],
  labelFontWeight = theme.typography.fontWeight['500'],
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
