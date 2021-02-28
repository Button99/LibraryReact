import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import config from "./config";
import adminRoute from "./routes/adminRoute";
import bookRoute from "./routes/bookRoute";


dotenv.config();

const mongodbUrl= config.MONGODB_URL;

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch((error) => console.log(error.reason));


const app= express();

app.use(bodyParser.json());
app.use("/api/books", bookRoute);
app.use("/api/users", adminRoute);


app.listen(5000, () => {console.log("Server started at http://localhost:5000")});