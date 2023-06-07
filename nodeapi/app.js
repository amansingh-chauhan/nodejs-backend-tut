import express from "express";

import userRouter from "./routes/users.js";

import { config } from "dotenv";

export const app = express();

config({
    path:"./utility/config.env"
})
//using middleware
app.use(express.json());
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("nice working");
});
