import { NavBarContainer } from "./containers/NavBarContainer";
import styles from "./App.module.css";

import { useState, useEffect } from "react";
import { WordBtnContainer } from "./containers/wordBtnContainer";
import { WordData } from "./types/WordData";
import { WordDataRepository } from "./repository/wordRepo";

export default function Home() {
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
        <WordBtnContainer
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
    </div>
  );
}
