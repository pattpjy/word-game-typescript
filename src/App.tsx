import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingContainer from "./containers/LandingContainer";
import GameContainer from "./containers/GameContainer";
import ProgressContainer from "./containers/ProgressContainer";
import SettingContainer from "./containers/SettingContainer";
import StickyFooter from "./components/sticky-footer/StickyFooter";
const App: React.FC = () => {
  return (
    <BrowserRouter>
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
      {StickyFooter()}
    </BrowserRouter>
  );
};
export default App;
