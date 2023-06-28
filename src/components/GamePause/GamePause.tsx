import styles from "./gamePause.module.css";
import { useModal, ModalHook } from "../../Hook/modal";

export const gamePauseModal = () => {
  const modal: ModalHook = useModal();
  return (
    <div className={styles["modalContainer"]}>
      <button onClick={modal.openModal}>Open Modal</button>
      {modal.isOpen && (
        <div className={styles["modal"]}>
          {" "}
          <h2>This is Modal</h2>
          <button onClick={modal.closeModal}> Close Modal</button>
        </div>
      )}
    </div>
  );
};
