import styled, { css } from 'styled-components';
import { theme } from '../../themes';

/** Responsável por envolver toda a estrutura do Wizard e seus elementos. */
export const WizardContainer = styled.nav<WizardProps>`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ step }) =>
    step ? `repeat(${step}, 1fr)` : 'repeat(5, 1fr)'};
  grid-template-rows: 1fr;
  background-color: ${theme.colors.neutral.white};
  border: thin solid ${theme.colors.neutral['20']};
`;

/** Responsável por estilizar as etapas do Wizard. */
export const WizardStep = styled.button<WizardProps>`
  display: flex;
  gap: ${theme.space['x0.5rem']};
  padding: ${theme.space.x1rem};
  background-color: ${theme.colors.neutral.white};
  justify-content: space-between;
  align-items: center;
  border: ${theme.space.x1px} solid ${theme.colors.neutral.transparent};
  border-right-color: ${theme.colors.neutral['20']};

  ${({ active, finished }) =>
    active
      ? css`
          border-bottom: ${theme.space.x2px} solid ${theme.colors.blue['10']};
        `
      : finished
      ? css`
          border-bottom: ${theme.space.x2px} solid ${theme.colors.green['40']};
        `
      : ''};

  &:disabled {
    ${({ active }) =>
      !active &&
      css`
        cursor: initial;
        h1,
        text {
          color: ${theme.colors.neutral['90']};
        }

        svg {
          path {
            stroke: ${theme.colors.neutral['90']};
          }
        }
      `};
  }

  &:hover:not(:disabled) {
    background-color: ${theme.colors.neutral['60']};
    border-bottom: ${theme.space.x2px} solid ${theme.colors.neutral.black};
    cursor: pointer;
  }
`;

/** Responsável por agrupar o conteúdo das etapas do Wizard. */
export const WizardStepContainer = styled.div<WizardProps>`
  display: flex;
  gap: ${theme.space['x0.5rem']};

  ${({ active }) =>
    active
      ? css`
          svg {
            path {
              stroke: ${theme.colors.blue['10']};
            }
          }
        `
      : ''};
`;

/** Responsável por estilizar o conteúdo das etapas do Wizard. */
export const WizardStepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

/** Responsável por estilizar o título das etapas do Wizard. */
export const WizardStepTitle = styled.h1<WizardProps>`
  color: ${theme.colors.blue['10']};
  font-size: ${theme.typography.fontSize.sm.x3};
  font-style: normal;
  font-weight: ${theme.typography.fontWeight['500']};
  line-height: 150%;

  ${({ active }) =>
    active
      ? css`
          font-weight: ${theme.typography.fontWeight['700']};
          color: ${theme.colors.blue['10']};
        `
      : css`
          color: ${theme.colors.neutral['30']};
        `};
`;

/** Responsável por estilizar a descrição das etapas do Wizard. */
export const WizardStepDescription = styled.text<WizardProps>`
  color: ${theme.colors.neutral['30']};
  font-size: ${theme.typography.fontSize.sm.x3};
  font-style: normal;
  font-weight: ${theme.typography.fontWeight['400']};
  line-height: 150%;
  text-wrap: nowrap;
`;
