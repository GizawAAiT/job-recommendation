import { connect } from "./utils/dp/setup";
const express = require("express");
const port = process.env.PORT || 3000;
export const app = express();

app.get("/", (req: any, res: any) => {
  res.send("Hello world");
});

export const start = async () => {
  try {
    await connect();
    app.listen(port, () => {
      console.log(`Connected on port ${port}`);
    });
  } catch (error) {
    console.log("Disconnected from the server");
  }
};
