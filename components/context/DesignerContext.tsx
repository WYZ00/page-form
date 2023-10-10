"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { FormElementIntance } from "../FormElements";

type DesignerContextType = {
  elements: FormElementIntance[];
  setElements: Dispatch<SetStateAction<FormElementIntance[]>>;
  addElement: (index: number, element: FormElementIntance) => void;
  removeElement: (id: string) => void;

  selectedElement: FormElementIntance | null;
  setSelectedElement: Dispatch<SetStateAction<FormElementIntance | null>>;

  updateElement: (id: string, element: FormElementIntance) => void;
};

export const DesignerContext = createContext<DesignerContextType | null>(null);

export default function DesignerContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [elements, setElements] = useState<FormElementIntance[]>([]);
  const [selectedElement, setSelectedElement] =
    useState<FormElementIntance | null>(null);

  const addElement = (index: number, element: FormElementIntance) => {
    setElements((prev) => {
      const newElements = [...prev];
      newElements.splice(index, 0, element);
      return newElements;
    });
  };

  const removeElement = (id: string) => {
    setElements((prev) => prev.filter((element) => element.id !== id));
  };

  const updateElement = (id: string, element: FormElementIntance) => {
    setElements((prev) => {
      const newElements = [...prev];
      const index = newElements.findIndex((el) => el.id === id);
      newElements[index] = element;
      return newElements;
    });
  };

  return (
    <DesignerContext.Provider
      value={{
        elements,
        setElements,
        addElement,
        removeElement,
        selectedElement,
        setSelectedElement,
        updateElement,
      }}>
      {children}
    </DesignerContext.Provider>
  );
}
