//the container component responsible for managing the logic and state associated with the WordBtn component.

import React from "react";
import { WordBtn } from "../components/wordBTN";

interface WordBtnContainerProps {
  id: number;
  imgSrc: string;
  audioSrc: string;
  word: string;
  categories: string;
}

export const WordBtnContainer: React.FC<WordBtnContainerProps> = ({
  id,
  imgSrc,
  audioSrc,
  word,
}) => {
  const playWord = (src: string) => {
    const audio = new Audio(src);
    audio.play();
  };
  return (
    <WordBtn
      id={id}
      imgSrc={imgSrc}
      audioSrc={audioSrc}
      word={word}
      onClick={playWord}
    />
  );
};
