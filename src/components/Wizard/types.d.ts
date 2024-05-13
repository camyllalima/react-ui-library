/** Propriedades do componente Wizard. */
interface WizardProps {
  /** Array do tipo `WizardStepType` que recebe os passos do stepper. */
  steps?: WizardStepType[];

  /** Recebe a quantidade de etapas do stepper. */
  step?: number;

  /** Indica se a etapa está ativa. */
  active?: boolean;

  /** Indica se a etapa foi concluída. */
  finished?: boolean;

  /** Ação de click em alguma etapa no stepper. */
  onClickStep?: (value) => void;
}

/** Propriedades das etapas do Wizard. */
type WizardStepType = {
  /** Valor da etapa. */
  value: string;

  /** Indica se a etapa está ativa. */
  active?: boolean;

  /** Indica se a etapa está desabilitada. */
  disabled?: boolean;

  /** Ícone da etapa. */
  icon?: ReactNode;

  /** Título da etapa. */
  title?: string;

  /** Descrição da etapa. */
  textDescription?: string;

  /** Indica se a etapa foi concluída. */
  finished?: boolean;
};
