import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import Box from "@mui/material/Box";

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
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <nav aria-label="category selections bar">
        {categories.map((categories) => {
          return (
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  key={categories}
                  onClick={() => handleCategorySelection(categories)}
                >
                  <ListItemText primary={categories} />
                </ListItemButton>
              </ListItem>
            </List>
          );
        })}
      </nav>
    </Box>
  );
};
