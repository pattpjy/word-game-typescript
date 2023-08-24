import { useNavigate } from "react-router-dom";
import { IconButton, TextField } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ParentsModeContainer = () => {
  const navigate = useNavigate();
  const [childName, setChildName] = useState("");
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Welcome to Parents Mode</h1>
      <form>
        <TextField
          value={childName}
          onChange={(e) => setChildName(e.target.value)}
          type={"text"}
          placeholder="Child Name"
          variant="outlined"
        />
      </form>
      <IconButton aria-label="back to home" onClick={handleClick}>
        <FontAwesomeIcon icon={faHouse} />
      </IconButton>
    </div>
  );
};

export default ParentsModeContainer;
