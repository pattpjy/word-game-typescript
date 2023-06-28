import { useState } from "react";
interface ModalHook {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useModal: () => ModalHook = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (): void => {
    setIsOpen(true);
  };
  const closeModal = (): void => {
    setIsOpen(false);
  };
  return { isOpen, openModal, closeModal };
};
