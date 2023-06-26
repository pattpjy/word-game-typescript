//the container component responsible for managing the logic and state associated with the game component.

import React, { useState } from "react";

import { CatBarContainer } from "./CatBarContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBurger } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import styles from "./container.module.css";

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

// Import individual Font Awesome Pro icons
library.add(faBurger, faXmark);

const GameContainer: React.FC<GameContainerProps> = () => {
  const [allWords, setAllWords] = useState<WordData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [catBarOpen, setCatBarOpen] = useState<boolean>(false);

  const handleBurgerOpen = () => {
    setCatBarOpen(true);
  };
  const handleBurgerClose = () => {
    setCatBarOpen(false);
  };

  console.log(catBarOpen);
  //maybe instead of having the burger open close state just have a catbar state?
  const handleCategorySelect = async (category: string) => {
    setSelectedCategory(category);
    try {
      const wordDataRepository = new WordDataRepository();
      const data = await wordDataRepository.getWordsByCategory(category);
      setAllWords(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles["game-board"]}>
      <FontAwesomeIcon icon={faBurger} onClick={handleBurgerOpen} />
      <div
        className={
          catBarOpen
            ? styles["catBarContainerOpen"]
            : styles["catBarContainerClose"]
        }
      >
        <CatBarContainer onCategorySelected={handleCategorySelect} />
      </div>

      <FontAwesomeIcon icon={faXmark} onClick={handleBurgerClose} />
      {allWords.length > 0 && selectedCategory && (
        <main className={styles.main}>
          <GameBoard allWords={allWords} />
        </main>
      )}
    </div>
  );
};
export default GameContainer;
