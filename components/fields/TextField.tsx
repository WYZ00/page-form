"use client";

import { MdTextFields } from "react-icons/md";
import {
  ElemenstsType,
  FormElement,
  FormElementIntance,
} from "../FormElements";

const type: ElemenstsType = "TextField";

export const TextFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: {
      label: "Text field",
      helperText: "Helper text",
      required: false,
      placeHolder: "values here...",
    },
  }),
  designerBtnElement: {
    icon: MdTextFields,
    label: "Text Field",
  },
  designerComponent: DesignerComponent,
  formComponent: () => <div>FOrm component</div>,
  propertiesComponent: () => <div>Properties component</div>,
};

function DesignerComponent({
  elementInstance,
}: {
  elementInstance: FormElementIntance;
}) {
  return (
    <div className="text-white">{elementInstance.extraAttributes?.label}</div>
  );
}
