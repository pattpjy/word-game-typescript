import styles from "./gamePause.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import { useModal, ModalHook } from "../../Hook/modal";
import { Typography } from "@mui/material";

library.add(faCirclePlay, faDoorOpen);

interface GamePauseModalProps {
  onClose: () => void;
}
export const GamePauseModal: React.FC<GamePauseModalProps> = ({ onClose }) => {
  const modal: ModalHook = useModal();

  return (
    <div className={styles["modalContainer"]}>
      {modal.isOpen && (
        <div className={styles["modal"]}>
          <Typography variant="h2" align="center">
            Keep Playing?
          </Typography>
          <div className={styles["footer"]}>
            <FontAwesomeIcon icon={faDoorOpen} className={styles["icon"]} />
            <FontAwesomeIcon
              className={styles["icon"]}
              onClick={() => {
                modal.closeModal();
                onClose();
              }}
              icon={faCirclePlay}
            />
          </div>
        </div>
      )}
    </div>
  );
};
