import { WordData } from "../../types/WordData";
import { WordBtn } from "../WordBTN/wordBTN";
import styles from "./gameBoard.module.css";

interface GameBoardProps {
  allWords: WordData[];
}
const GameBoard: React.FC<GameBoardProps> = ({ allWords }) => {
  const playWord = (src: string) => {
    //error handling for cases where the audio_url is empty or invalid.
    if (src) {
      const audio = new Audio(src);
      audio.play();
    }
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
    <div>
      <div className={styles["word-board"]}>{displayWord(allWords)}</div>
    </div>
  );
};

export default GameBoard;
