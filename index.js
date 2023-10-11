import express from "express";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler.js";
import "./db/server.js";
import authRouter from "./routes/authRouter.js";
import postRouter from "./routes/postRouter.js";

const app = express();
const port = 8000;

app.use(cors());

app.use(express.json());

app.use("/auth", authRouter);
app.use("/posts", postRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
