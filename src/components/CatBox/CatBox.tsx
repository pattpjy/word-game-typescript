import React, { useState } from "react";
import styles from "./catBox.module.css";

interface CatBoxContainerProp {
  onCategorySelected: (category: string) => void;
}

export const CatBox: React.FC<CatBoxContainerProp> = ({
  onCategorySelected,
}) => {
  const [selectedCat, setSelectedCat] = useState<string>("");
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
    setSelectedCat(category);
  };

  const handlePlayClick = (): void => {
    if (selectedCat) {
      // Pass the selected category to the parent component
      onCategorySelected(selectedCat);
    }
  };

  return (
    <div className={styles["box"]}>
      <div className={styles["catGrid"]}>
        {categoriesArray.map((categories) => {
          return (
            <button
              className={styles["btn"]}
              key={categories}
              onClick={() => handleCategorySelect(categories)}
            >
              {categories}
            </button>
          );
        })}
      </div>
      <button className={styles["play-btn"]} onClick={handlePlayClick}>
        <i className={`fa-duotone fa-circle-play ${styles["large-icon"]}`}></i>
      </button>
    </div>
  );
};
