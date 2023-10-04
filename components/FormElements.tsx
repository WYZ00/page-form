import { TextFieldFormElement } from "./fields/TextField";

export type ElemenstsType = "TextField";

export type FormElement = {
  type: ElemenstsType;

  construct: (id: string) => FormElementIntance;

  designerBtnElement: {
    icon: React.ElementType;
    label: string;
  };
  designerComponent: React.FC<{
    elementInstance: FormElementIntance;
  }>;
  formComponent: React.FC;
  propertiesComponent: React.FC;
};

export type FormElementIntance = {
  id: string;
  type: ElemenstsType;
  extraAttributes?: Record<string, any>;
};

type FormElementsType = {
  [key in ElemenstsType]: FormElement;
};
export const FormElements: FormElementsType = {
  TextField: TextFieldFormElement,
};
