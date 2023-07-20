import styles from "./container.module.css";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
interface LandingContainerProp {
  childName: string;
}

const LandingContainer: React.FC<LandingContainerProp> = ({ childName }) => {
  const navigate = useNavigate();
  const handleClick = (): void => {
    navigate("/game");
  };

  return (
    <Container fixed>
      <CssBaseline />
      <Box sx={{ bgcolor: "#cfe8fc", width: "100vh", height: "60vh" }}>
        <Typography variant="h1">
          Hello {childName}, Let's learn Thai
        </Typography>
        <Typography variant="body1">
          This is the landing page of your application.
        </Typography>
        <br />
        <button className={styles["play-btn"]} onClick={handleClick}>
          <i
            className={`fa-duotone fa-circle-play ${styles["large-icon"]}`}
          ></i>
        </button>
      </Box>
    </Container>
  );
};

export default LandingContainer;
