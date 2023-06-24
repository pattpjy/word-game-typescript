import React from "react";
import { NavBar } from "../components/NavBar/NavBar";

interface NavBarContainerProp {
  onCategorySelected: (category: string) => void;
}
export const NavBarContainer: React.FC<NavBarContainerProp> = ({
  onCategorySelected,
}) => {
  const categoriesArray = [
    "All",
    "food",
    "animals",
    "around us",
    "our body",
    "clothings",
    "vehicles",
  ];
  const handleCategorySelect = (category: string) => {
    onCategorySelected(category);
  };
  return (
    <NavBar
      categories={categoriesArray}
      onCategorySelect={handleCategorySelect}
    />
  );
};
