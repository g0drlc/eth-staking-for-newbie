import { createContext, useContext, ReactNode, useState } from "react";
import { useLockedBody } from "../hooks/use-locked-body";

interface ModalContextType {
  openClaimModal: () => void;
  closeClaimModal: () => void;
  isOpenClaimModal: boolean;

  openStakeModal: () => void;
  closeStakeModal: () => void;
  isOpenStakeModal: boolean;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

interface ModalProviderProps {
  children: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const { setLocked } = useLockedBody();
  const [isOpenClaimModal, setClaimModal] = useState<boolean>(false);
  const [isOpenStakeModal, setStakeModal] = useState<boolean>(false);

  const openClaimModal = () => {
    setClaimModal(true);
    setLocked(true);

    document.body.classList.add("modal-open");
  };

  const closeClaimModal = () => {
    setClaimModal(false);
    setLocked(false);

    document.body.classList.remove("modal-open");
  };

  const openStakeModal = () => {
    setStakeModal(true);
    setLocked(true);

    document.body.classList.add("modal-open");
  };

  const closeStakeModal = () => {
    setStakeModal(false);
    setLocked(false);

    document.body.classList.remove("modal-open");
  };

  const modalContextValue: ModalContextType = {
    openClaimModal,
    closeClaimModal,
    isOpenClaimModal,
    openStakeModal,
    closeStakeModal,
    isOpenStakeModal,
  };

  return (
    <ModalContext.Provider value={modalContextValue}>
      {children}
    </ModalContext.Provider>
  );
}
