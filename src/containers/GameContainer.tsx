//the container component responsible for managing the logic and state associated with the game component.

import React from "react";
import { WordBtn } from "../components/WordBTN/wordBTN";
import { NavBarContainer } from "./NavBarContainer";
import styles from "./container.module.css";
import { useState, useEffect } from "react";

import { WordData } from "../types/WordData";
import { WordDataRepository } from "../repository/wordRepo";
import GameBoard from "../components/GameBoard/GameBoard";
interface GameContainerProps {
  id: number;
  imgSrc: string;
  audioSrc: string;
  word: string;
  categories: string;
}
const GameContainer: React.FC<GameContainerProps> = () => {
  const [allWords, setAllWords] = useState<WordData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const wordDataRepository = new WordDataRepository();
        const data = await wordDataRepository.getAllWords();
        setAllWords(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const playWord = (src: string) => {
    const audio = new Audio(src);
    audio.play();
  };

  const displayWord = () => {
    const mappedData = allWords.map((el: WordData) => {
      return (
        <WordBtn
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
    <div className={styles["game-board"]}>
      <NavBarContainer />
      <main className={styles.main}>
        <GameBoard />
        <div className={styles["word-board"]}>{displayWord()}</div>
      </main>
    </div>
  );
};
export default GameContainer;
