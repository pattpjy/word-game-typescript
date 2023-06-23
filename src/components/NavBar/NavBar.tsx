import React from "react";
import { getRandomWordsByCategories } from "../../apiCall/apiCall";
interface NavBarProps {
  categories: string[];
  onCategorySelect: (category: string) => void;
}

export const NavBar: React.FC<NavBarProps> = ({
  categories,
  onCategorySelect,
}) => {
  const handleCategorySelection = async (categories: string) => {
    try {
      await getRandomWordsByCategories(categories);
    } catch (error) {
      console.error(error);
    }
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
