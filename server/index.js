import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postRoute from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoute);

const CONNECTION_URL =
  "mongodb+srv://hobayer:abcd1245@cluster0.wglua.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 500;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    })
  )
  .catch((error) => console.log(error.message));
