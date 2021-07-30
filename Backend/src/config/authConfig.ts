import { config } from "dotenv";

config();

export const jwt = {
  secret: process.env.DEFAULT_SECRET,
  expiresIn: process.env.DEFAULT_EXPIRES_IN,
};
