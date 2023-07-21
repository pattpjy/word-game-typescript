import React, { useState } from "react";
import styles from "./catBox.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";

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

      <Button
        variant="text"
        size="small"
        aria-label="playCategory"
        onClick={handlePlayClick}
        sx={{
          width: 200,
          padding: 1,
          margin: "2em 0 0 8em",
          fontSize: "4rem",
        }}
      >
        <FontAwesomeIcon icon={faCirclePlay} />
      </Button>
    </div>
  );
};
