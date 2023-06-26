import React from "react";
import { NavBar } from "../components/CatBar/CatBar";

interface CatBarContainerProp {
  onCategorySelected: (category: string) => void;
}
export const CatBarContainer: React.FC<CatBarContainerProp> = ({
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
