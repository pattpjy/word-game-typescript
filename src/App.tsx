import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingContainer from "./containers/LandingContainer";
import GameContainer from "./containers/GameContainer";
import ProgressContainer from "./containers/ProgressContainer";
import SettingContainer from "./containers/SettingContainer";
import style from "./App.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faUserGroup);
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <main className={style["App"]}>
        <FontAwesomeIcon icon={faUserGroup} />
        <Routes>
          <Route path="/" element={<LandingContainer childName="Maddie" />} />
          <Route
            path="/game"
            element={
              <GameContainer
                id={1}
                imgSrc="example.jpg"
                audioSrc="audio.mp3"
                word="sample"
                categories={"category1"}
              />
            }
          />
          <Route path="/progress" element={<ProgressContainer />} />
          <Route path="/setting" element={<SettingContainer />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
export default App;
