import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(
    "mongodb+srv://Vincent:isaac1989@ap.hyolreh.mongodb.net/Ugah?retryWrites=true&w=majority"
    // "mongodb+srv://desklub:onyedika11@ap.bljtebw.mongodb.net/First-DB?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("connected To Database and Listening To Localhost 5000")
  )
  .catch((err) => console.log(err));
