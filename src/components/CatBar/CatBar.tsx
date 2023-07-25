import React from "react";
import {
  List,
  Box,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material/";

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
    <div>
      <Box aria-label="category selections bar" sx={{ boxShadow: 3 }}>
        {categories.map((categories) => {
          return (
            <List key={categories} sx={{ margin: 0.5 }} disablePadding>
              <ListItem sx={{ padding: 0 }}>
                <ListItemButton
                  sx={{ padding: 1 }}
                  key={categories}
                  onClick={() => handleCategorySelection(categories)}
                >
                  <ListItemText primary={categories} />
                </ListItemButton>
              </ListItem>
            </List>
          );
        })}
      </Box>
    </div>
  );
};
