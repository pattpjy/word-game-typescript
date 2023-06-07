import React from "react";
import { NavBar } from "../components/NavBar";

export const NavBarContainer: React.FC = () => {
  const cat = ["All", "Greeting", "Household", "Food"];

  return <NavBar cat={cat} />;
};
