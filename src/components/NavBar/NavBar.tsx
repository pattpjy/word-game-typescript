import React from "react";
import { getRandomWordsByCategories } from "../../apiCall/apiCall";
interface NavBarProps {
  categories: string[];
}

export const NavBar: React.FC<NavBarProps> = ({ categories }) => {
  const handleCategorySelection = async (categories: string) => {
    try {
      const randomWords = await getRandomWordsByCategories(categories);
      console.log(randomWords);
    } catch (error) {
      console.error(error);
    }
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
