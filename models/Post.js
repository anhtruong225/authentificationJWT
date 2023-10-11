import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Author is required"],
  },
  content: {
    type: String,
    required: [true, "Content is required"],
  },
  image: {
    type: String,
    required: [true, "Image url is required"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Post", postSchema);
