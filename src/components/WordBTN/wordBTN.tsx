//the presentational component, receives the props and handles the UI rendering. It displays a button with an image inside, and when the button is clicked, it triggers the onClick function passed as a prop.
import React from "react";
import styles from "./wordBTN.module.css";

interface WordBtnProps {
  id: number;
  imgSrc: string;
  audioSrc: string;
  word: string;
  onClick: (src: string) => void;
}
export const WordBtn: React.FC<WordBtnProps> = ({
  id,
  imgSrc,
  audioSrc,
  word,
  onClick,
}) => {
  return (
    <button onClick={() => onClick(audioSrc)}>
      <img
        id={id.toString()}
        src={imgSrc}
        alt={word}
        className={styles["word-btn-img"]}
      />
    </button>
  );
};
