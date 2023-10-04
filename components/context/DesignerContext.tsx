"use client";

import { ReactNode, createContext, useState } from "react";
import { FormElementIntance } from "../FormElements";

type DesignerContextType = {
  elements: FormElementIntance[];
  addElement: (index: number, element: FormElementIntance) => void;
};

export const DesignerContext = createContext<DesignerContextType | null>(null);

export default function DesignerContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [elements, setElements] = useState<FormElementIntance[]>([]);

  const addElement = (index: number, element: FormElementIntance) => {
    setElements((prev) => {
      const newElements = [...prev];
      newElements.splice(index, 0, element);
      return newElements;
    });
  };

  return (
    <DesignerContext.Provider
      value={{
        elements,
        addElement,
      }}>
      {children}
    </DesignerContext.Provider>
  );
}
