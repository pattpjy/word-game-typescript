import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingContainer from "./containers/LandingContainer";
import GameContainer from "./containers/GameContainer";
import ProgressContainer from "./containers/ProgressContainer";
import ParentsModeContainer from "./containers/ParentsModeContainer";
import { StickyFooter } from "./components/sticky-footer/StickyFooter";
import Auth from "./components/Login/auth";
const App: React.FC = () => {
  const childName = "Maddie";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingContainer childName={childName} />} />
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
        <Route
          path="/parentsMode"
          element={<ParentsModeContainer childName={childName} />}
        />
        <Route path="/login" element={<Auth />} />
      </Routes>
      <StickyFooter />
    </BrowserRouter>
  );
};
export default App;
