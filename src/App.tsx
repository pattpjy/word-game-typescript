import navBar from "./components/navbar";
import "./App.css";
import { getAllWords } from "./apiCall/apiCall";
import React, { useState, useEffect } from "react";
import { WordBtn } from "./components/wordBTN";

export default function Home() {
  interface WordData {
    id: number;
    img_url: string;
    audio_url: string;
    word: string;
    categories: string;
  }
  const [allWords, setAllWords] = useState<WordData[]>([]);

  const fetchData = async () => {
    const data = await getAllWords();
    setAllWords(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  //need function to map over data and display word
  const displayWord = () => {
    const mappedData = allWords.map((el: WordData) => {
      return (
        <WordBtn
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
    <>
      <main className="main">
        {navBar()}
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
        <div className="word-board">{displayWord()}</div>
      </main>
    </>
  );
}
