import styles from "./container.module.css";
import { useNavigate } from "react-router-dom";
import StickyFooter from "../components/sticky-footer/StickyFooter";

interface LandingContainerProp {
  childName: string;
}

const LandingContainer: React.FC<LandingContainerProp> = ({ childName }) => {
  const navigate = useNavigate();
  const handleClick = (): void => {
    navigate("/game");
  };

  return (
    <div className={styles["landing-body"]}>
      <h1>Hello {childName}, </h1>
      <h1>Let's learn Thai</h1>
      <p>This is the landing page of your application.</p>

      <button className={styles["play-btn"]} onClick={handleClick}>
        <i className={`fa-duotone fa-circle-play ${styles["large-icon"]}`}></i>
      </button>
      {/* {StickyFooter()} */}
    </div>
  );
};

export default LandingContainer;
