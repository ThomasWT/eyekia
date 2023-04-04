import express from "express";
import { connectToMongoDB } from "./connectToDb.mjs";
import bodyParser from "body-parser";
import cors from "cors";

import usersRouter from "./routes/users.mjs";
import authRouter from "./routes/auth.mjs";
import statsRouter from "./routes/stats.mjs";
import { mongoose } from "mongoose";

import dotenv from 'dotenv';
dotenv.config({path:'./.env'});

const app = express();
const port = process.env.NODE_ENV !== "test" ? process.env.PORT : 5742;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: '*'
}));
connectToMongoDB();

app.use("/auth", authRouter);
app.use("/stats", statsRouter);
app.use("/users", usersRouter);
if (process.env.NODE_ENV !== "test") {
  app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString().toString()}] ` + JSON.stringify({type: req.method, path: req.path}));
    next();
  });
}
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const server = app.listen(port, () => {
  if (process.env.NODE_ENV !== "test") {
    console.log(`Server listening on port ${port}`);
  }
});

// When the app is shutting down, close the MongoDB connection
process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("MongoDB connection closed");
    process.exit(0);
  });
});

export { app, server };
