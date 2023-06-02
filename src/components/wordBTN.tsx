//function to create wordBTn
import React from "react";
interface WordBtnProps {
  id: number;
  imgSrc: string;
  audioSrc: string;
  word: string;
  categories: string;
}
export const WordBtn: React.FC<WordBtnProps> = ({
  id,
  audioSrc,
  imgSrc,
  word,
}) => {
  const playWord = (src: string) => {
    const audio = new Audio(src);
    audio.play();
  };
  return (
    <button id={id.toString()} onClick={() => playWord(audioSrc)}>
      <img src={imgSrc} alt={word} className="word-img " />
    </button>
  );
};
