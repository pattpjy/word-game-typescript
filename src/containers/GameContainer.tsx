//the container component responsible for managing the logic and state associated with the WordBtn component.

import React from "react";
import { WordBtn } from "../components/WordBTN/wordBTN";
import { NavBarContainer } from "./NavBarContainer";
import styles from "../App.module.css";
import { useState, useEffect } from "react";

// import { WordData } from "./types/WordData";
// import { WordDataRepository } from "./repository/wordRepo";

interface GameContainerProps {
  id: number;
  imgSrc: string;
  audioSrc: string;
  word: string;
  categories: string;
}
const GameContainer: React.FC<GameContainerProps> = ({
  id,
  imgSrc,
  audioSrc,
  word,
}) => {
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
  console.log(allWords);

  const displayWord = () => {
    const mappedData = allWords.map((el: WordData) => {
      return (
        <GameContainer
          key={el.id}
          id={el.id}
          imgSrc={el.img_url}
          audioSrc={el.audio_url}
          word={el.word}
          categories={el.categories}
        />
      );
    });
    return mappedData;
  };

  const playWord = (src: string) => {
    const audio = new Audio(src);
    audio.play();
  };
  return (
    <div className={styles.App}>
      <NavBarContainer />
      <main className={styles.main}>
        <h1>
          <title>Learn Words Game</title>
          <meta name="description" content="Learning word in new language" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </h1>
        <div>
          <p>Hello, Maddie. Let's learn new Thai words</p>
          <p>play the word by clicking on the images</p>
        </div>
        <div className={styles["word-board"]}>{displayWord()}</div>
      </main>

      <WordBtn
        id={id}
        imgSrc={imgSrc}
        audioSrc={audioSrc}
        word={word}
        onClick={playWord}
      />
    </div>
  );
};
export default GameContainer;
