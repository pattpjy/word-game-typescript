import React from "react";
import { NavBar } from "../components/NavBar/NavBar";

export const NavBarContainer: React.FC = () => {
  const categoriesArray = [
    "All",
    "food",
    "animals",
    "around us",
    "our body",
    "clothings",
    "vehicles",
  ];
  return <NavBar categories={categoriesArray} />;
};
