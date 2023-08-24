import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://sookmark.com/">
        Thai Word Game
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export const StickyFooter = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/parentsMode");
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <IconButton aria-label="parentMode" onClick={handleClick}>
            <FontAwesomeIcon icon={faUserGroup} />
          </IconButton>
          {/* <Copyright /> */}
        </Container>
      </Box>
    </ThemeProvider>
  );
};
