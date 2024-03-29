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
import { CatBox } from "../components/CatBox/CatBox";
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
  const hamburgerIconStyles = {
    display: selectedCategory ? "block" : "none",
  };
  return (
    <div className={styles["game-board"]}>
      <div
        className={
          selectedCategory
            ? styles["catBoxContainerHide"]
            : styles["catBoxContainerVisible"]
        }
      >
        <CatBox onCategorySelected={handleCategorySelect} />
      </div>

      <FontAwesomeIcon
        icon={faBurger}
        className={styles["hamburger-icon"]}
        style={hamburgerIconStyles}
        onClick={handleBurgerOpen}
      />

      <div
        className={
          catBarOpen
            ? styles["catBarContainerOpen"]
            : styles["catBarContainerClose"]
        }
      >
        <CatBarContainer onCategorySelected={handleCategorySelect} />
      </div>

      <FontAwesomeIcon
        icon={faXmark}
        className={styles["xmark-icon"]}
        style={{ display: catBarOpen ? "block" : "none" }}
        onClick={handleBurgerClose}
      />
      {allWords.length > 0 && selectedCategory && (
        <main className={styles.main}>
          <GameBoard
            allWords={allWords}
            onCategorySelected={handleCategorySelect}
            selectedCategories={selectedCategory}
          />
        </main>
      )}
    </div>
  );
};
export default GameContainer;
