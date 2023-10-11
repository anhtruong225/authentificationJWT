import { Router } from "express";
import * as postController from "../controllers/post.js";
import verifyToken from "../middlewares/verifyToken.js";

const postRouter = Router();

postRouter
  .route("/")
  .get(postController.getAllPosts)
  .post(verifyToken, postController.createPost);
postRouter
  .route("/:id")
  .get(postController.getSinglePost)
  .put(verifyToken, postController.updatePost)
  .delete(verifyToken, postController.deletePost);

export default postRouter;
