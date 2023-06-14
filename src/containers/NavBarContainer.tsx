import React from "react";
import { NavBar } from "../components/NavBar/NavBar";

export const NavBarContainer: React.FC = () => {
  const categoriesArray = ["All", "Greeting", "Household", "Food"];
  return <NavBar categories={categoriesArray} />;
};
