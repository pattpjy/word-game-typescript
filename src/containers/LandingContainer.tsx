import styles from "./container.module.css";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
interface LandingContainerProp {
  childName: string;
}
library.add(faCirclePlay);

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
        <FontAwesomeIcon
          icon={faCirclePlay}
          beatFade
          className={styles["large-icon"]}
        />
      </button>
    </Container>
  );
};

export default LandingContainer;
