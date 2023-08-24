import { useNavigate } from "react-router-dom";
import { IconButton, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCheck } from "@fortawesome/free-solid-svg-icons";
import Typography from "@mui/material/Typography";

import ToggleButton from "@mui/material/ToggleButton";
import { useState } from "react";

interface ParentsModeContainerProp {
  childName: string;
}
const ParentsModeContainer: React.FC<ParentsModeContainerProp> = ({
  childName,
}) => {
  const navigate = useNavigate();
  const [allowedCat, setaAllowedCat] = useState(false);
  const [allowedTimer, setaAllowedTimer] = useState(false);
  const handleClick = () => {
    navigate("/");
  };
  const handleResultClick = () => {
    navigate("/progress");
  };
  return (
    <div>
      <Typography variant="h1">Welcome Parents!</Typography>
      <Typography variant="h4">Child Name : {childName}</Typography>
      <Typography variant="h4">
        Allowed Categories
        <ToggleButton
          value="check"
          selected={allowedCat}
          onChange={() => {
            setaAllowedCat(!setaAllowedCat);
          }}
        >
          <FontAwesomeIcon icon={faCheck} />
        </ToggleButton>
      </Typography>
      <Typography variant="h4">
        Allowed Timer
        <ToggleButton
          value="check"
          selected={allowedTimer}
          onChange={() => {
            setaAllowedTimer(!setaAllowedTimer);
          }}
        >
          <FontAwesomeIcon icon={faCheck} />
        </ToggleButton>
      </Typography>
      <IconButton aria-label="see result" onClick={handleResultClick}>
        Result
      </IconButton>
      <IconButton aria-label="back to home" onClick={handleClick}>
        <FontAwesomeIcon icon={faHouse} />
      </IconButton>
    </div>
  );
};

export default ParentsModeContainer;
