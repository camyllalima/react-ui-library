import React from 'react';
import {
  WizardContainer,
  WizardStep,
  WizardStepContainer,
  WizardStepDescription,
  WizardStepTitle,
  WizardStepWrapper,
} from './styles';
import { CheckedIcon } from '../../icons';

export const Wizard: React.FC<WizardProps> = ({ steps, onClickStep }) => {
  return (
    <WizardContainer step={steps?.length}>
      {steps?.map(
        (step: WizardStepType, index): JSX.Element => {
          return (
            <WizardStep
              key={step?.value}
              active={step?.active}
              finished={step?.finished}
              disabled={step.disabled}
              onClick={() => onClickStep}
            >
              <WizardStepContainer active={step?.active}>
                {step?.icon}
                <WizardStepWrapper>
                  <WizardStepTitle active={step?.active}>
                    {`${index + 1}. ${step?.title}`}
                  </WizardStepTitle>
                  <WizardStepDescription active={step?.active}>
                    {step?.textDescription}
                  </WizardStepDescription>
                </WizardStepWrapper>
              </WizardStepContainer>
              {step?.finished && !step?.active && (
                <CheckedIcon width="1.25rem" height="1.25rem" color="#7AC143" />
              )}
            </WizardStep>
          );
        }
      )}
    </WizardContainer>
  );
};
