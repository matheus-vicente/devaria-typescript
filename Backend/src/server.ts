import { config } from "dotenv";

import { app } from ".";

config();

app.listen(process.env.DEFAULT_PORT, () =>
  console.log(`Server is running on port ${process.env.DEFAULT_PORT}`)
);
