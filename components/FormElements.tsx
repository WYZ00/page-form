import { TextFieldFormElement } from "./fields/TextField";

export type ElementsType = "TextField";

export type SubmitFunction = (key: string, value: string) => void;

export type FormElement = {
  type: ElementsType;

  construct: (id: string) => FormElementIntance;

  designerBtnElement: {
    icon: React.ElementType;
    label: string;
  };
  designerComponent: React.FC<{
    elementInstance: FormElementIntance;
  }>;
  formComponent: React.FC<{
    elementInstance: FormElementIntance;
    submitValue?: (key: string, value: string) => void;
    isInvalid?: boolean;
    defaultValue?: string;
  }>;
  propertiesComponent: React.FC<{
    elementInstance: FormElementIntance;
  }>;

  validate: (formElement: FormElementIntance, currentValue: string) => boolean;
};

export type FormElementIntance = {
  id: string;
  type: ElementsType;
  extraAttributes?: Record<string, any>;
};

type FormElementsType = {
  [key in ElementsType]: FormElement;
};
export const FormElements: FormElementsType = {
  TextField: TextFieldFormElement,
};
