import React from "react";
import { CatBar } from "../components/CatBar/CatBar";

interface CatBarContainerProp {
  onCategorySelected: (category: string) => void;
}
export const CatBarContainer: React.FC<CatBarContainerProp> = ({
  onCategorySelected,
}) => {
  const categoriesArray = [
    "all",
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
    <CatBar
      categories={categoriesArray}
      onCategorySelect={handleCategorySelect}
    />
  );
};
