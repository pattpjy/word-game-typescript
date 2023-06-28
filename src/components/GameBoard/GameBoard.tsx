import { WordData } from "../../types/WordData";
import { WordBtn } from "../WordBTN/wordBTN";
import styles from "./gameBoard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faXmark } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
import { GamePauseModal } from "../GamePause/GamePause";

interface GameBoardProps {
  allWords: WordData[];
}
library.add(faArrowsRotate, faXmark);

const GameBoard: React.FC<GameBoardProps> = ({ allWords }) => {
  const [wordCount, setWordCount] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);

  const playWord = (src: string) => {
    //error handling for cases where the audio_url is empty or invalid.
    if (src) {
      const audio = new Audio(src);
      audio.play();
    }
    setWordCount(wordCount + 1);
  };
  const handledOnXmarkClick = () => {
    console.log("X Clicked");
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };
  const displayWord = (words: WordData[]) => {
    const mappedData = words.map((el: WordData) => {
      return (
        <WordBtn
          key={el.id}
          id={el.id}
          imgSrc={el.img_url}
          audioSrc={el.audio_url}
          word={el.word}
          onClick={playWord}
        />
      );
    });
    return mappedData;
  };
  return (
    <div className={styles["board-container"]}>
      <FontAwesomeIcon icon={faArrowsRotate} />
      <div className={styles["word-board"]}>{displayWord(allWords)}</div>
      <FontAwesomeIcon onClick={handledOnXmarkClick} icon={faXmark} />
      <p>Word Count {wordCount}</p>
      {showModal && <GamePauseModal onClose={handleModalClose} />}
    </div>
  );
};

export default GameBoard;
