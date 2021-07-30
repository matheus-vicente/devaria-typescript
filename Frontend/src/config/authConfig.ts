import { config } from "dotenv";

config();

export const jwt = {
  secret: process.env.REACT_APP_DEFAULT_SECRET,
};
