import styled, { css } from 'styled-components';

/** Responsável por envolver toda a estrutura do Wizard e seus elementos. */
export const WizardContainer = styled.nav<WizardProps>`
  width: 100%;
  display: grid;
  grid-template-columns: ${({ step }) =>
    step ? `repeat(${step}, 1fr)` : 'repeat(5, 1fr)'};
  grid-template-rows: 1fr;
  background-color: #ffffff;
  border: thin solid #e5e6e6;
`;

/** Responsável por estilizar as etapas do Wizard. */
export const WizardStep = styled.button<WizardProps>`
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  background-color: #ffffff;
  justify-content: space-between;
  align-items: center;
  border: thin solid transparent;
  border-right-color: #e5e6e6;

  ${({ active, finished }) =>
    active
      ? css`
          border-bottom: 2px solid #48a4f9;
        `
      : finished
      ? css`
          border-bottom: 2px solid #7ac143;
        `
      : ''};

  &:disabled {
    ${({ active }) =>
      !active &&
      css`
        cursor: initial;
        h1,
        text {
          color: #c3c4c5;
        }

        svg {
          path {
            stroke: #c3c4c5;
          }
        }
      `};
  }

  &:hover:not(:disabled) {
    background-color: #f6f7f7;
    border-bottom: 2px solid #000000;
    cursor: pointer;
  }
`;

/** Responsável por agrupar o conteúdo das etapas do Wizard. */
export const WizardStepContainer = styled.div<WizardProps>`
  display: flex;
  gap: 0.5rem;

  ${({ active }) =>
    active
      ? css`
          svg {
            path {
              stroke: #48a4f9;
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
  color: #48a4f9;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;

  ${({ active }) =>
    active
      ? css`
          font-weight: 700;
          color: #48a4f9;
        `
      : css`
          color: #5c5e62;
        `};
`;

/** Responsável por estilizar a descrição das etapas do Wizard. */
export const WizardStepDescription = styled.text<WizardProps>`
  color: #5c5e62;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-wrap: nowrap;
`;
