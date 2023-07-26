import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Load the environment file based on the current mode (development or production)
function loadEnv(mode: string) {
  const env = dotenv.config({
    path: `.env.${mode}`,
  });
  if (env.error) {
    throw env.error;
  }
  return env.parsed;
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode);

  return {
    plugins: [react()],
    define: {
      "process.env": env, // Pass the loaded environment variables to the client-side
    },
  };
});
