import styles from "./gamePause.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faXmark } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import { useModal, ModalHook } from "../../Hook/modal";

library.add(faCirclePlay, faXmark);

interface GamePauseModalProps {
  onClose: () => void;
}
export const GamePauseModal: React.FC<GamePauseModalProps> = ({ onClose }) => {
  const modal: ModalHook = useModal();

  return (
    <div className={styles["modalContainer"]}>
      {modal.isOpen && (
        <div className={styles["modal"]}>
          <h2>This is Modal</h2>
          <FontAwesomeIcon icon={faXmark} />
          <FontAwesomeIcon
            onClick={() => {
              modal.closeModal();
              onClose();
            }}
            icon={faCirclePlay}
          />
        </div>
      )}
    </div>
  );
};
