"use client";

import { MdTextFields } from "react-icons/md";
import {
  ElemenstsType,
  FormElement,
  FormElementIntance,
} from "../FormElements";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const type: ElemenstsType = "TextField";

const extraAttributes = {
  label: "Text field",
  helperText: "Helper text",
  required: false,
  placeHolder: "values here...",
};

export const TextFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  designerBtnElement: {
    icon: MdTextFields,
    label: "Text Field",
  },
  designerComponent: DesignerComponent,
  formComponent: () => <div>FOrm component</div>,
  propertiesComponent: () => <div>Properties component</div>,
};

type CustomInstance = FormElementIntance & {
  extraAttributes: typeof extraAttributes;
};

function DesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementIntance;
}) {
  const element = elementInstance as CustomInstance;

  const { helperText, label, placeHolder, required } = element.extraAttributes;

  return (
    <div className="flex flex-col gap-2 w-full">
      <Label>
        {label}
        {required && "*"}
      </Label>
      <Input readOnly disabled placeholder={placeHolder} />
      {helperText && (
        <p className="text-muted-foreground text-[0.8rem]">{helperText}</p>
      )}
    </div>
  );
}
