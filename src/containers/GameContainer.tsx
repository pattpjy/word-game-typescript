//the container component responsible for managing the logic and state associated with the game component.

import React from "react";

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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };
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

  return (
    <div className={styles["game-board"]}>
      <NavBarContainer onCategorySelected={handleCategorySelect} />
      {selectedCategory && (
        <main className={styles.main}>
          <GameBoard allWords={allWords} />
        </main>
      )}
    </div>
  );
};
export default GameContainer;
