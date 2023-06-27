import React from "react";

interface CatBarProps {
  categories: string[];
  onCategorySelect: (category: string) => void;
}

export const CatBar: React.FC<CatBarProps> = ({
  categories,
  onCategorySelect,
}) => {
  const handleCategorySelection = async (categories: string) => {
    onCategorySelect(categories);
  };

  return (
    <ul className="nav-bar">
      {categories.map((categories) => {
        return (
          <li key={categories}>
            <button onClick={() => handleCategorySelection(categories)}>
              {categories}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
