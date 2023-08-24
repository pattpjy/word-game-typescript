import { Box, Typography, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const handleLogin = () => {
    // You can implement your authentication logic here
    // For demonstration purposes, let's consider a simple check
    if (username === "admin" && password === "password") {
      navigate("/"); // Redirect to the home page upon successful login
    } else {
      setLoginError(true);
    }
  };

  return (
    <div>
      <Typography component="h1" variant="h5">
        Log In
      </Typography>
      <form>
        <Box display="flex" flexDirection={"column"}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <TextField
            label="Username"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className={classes.submit}
            variant="contained"
            fullWidth
            onClick={handleLogin}
          >
            Sign In
          </Button>
        </Box>
        {loginError && (
          <Typography color="error">Invalid username or password</Typography>
        )}
      </form>
    </div>
  );
};
export default Auth;
