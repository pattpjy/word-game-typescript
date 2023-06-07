import React from "react";

interface NavBarProps {
  cat: string[];
}

export const NavBar: React.FC<NavBarProps> = ({ cat }) => {
  return (
    <ul className="nav-bar">
      {cat.map((categories) => {
        return (
          <li key={categories}>
            <button>{categories}</button>
          </li>
        );
      })}
    </ul>
  );
};
