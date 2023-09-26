import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.Conn.js";
import mongoose from "mongoose";
import cors from "cors";
import { logEvents, logger } from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";
import corsOptions from "./config/corsOptions.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3500;

connectDB();
app.use(express.static("public"));
app.use(logger);
app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "server" + "/public" });
});

app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  );
});
