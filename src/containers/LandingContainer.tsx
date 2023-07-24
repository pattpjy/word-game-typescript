import styles from "./container.module.css";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

interface LandingContainerProp {
  childName: string;
}

const LandingContainer: React.FC<LandingContainerProp> = ({ childName }) => {
  const navigate = useNavigate();
  const handleClick = (): void => {
    navigate("/game");
  };

  return (
    <Container
      fixed
      sx={{
        backgroundColor: "secondary",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h1">Hello {childName}, Let's learn Thai</Typography>
      <br />
      <button className={styles["play-btn"]} onClick={handleClick}>
        <i className={`fa-duotone fa-circle-play ${styles["large-icon"]}`}></i>
      </button>
    </Container>
  );
};

export default LandingContainer;
