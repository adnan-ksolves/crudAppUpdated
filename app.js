import "dotenv/config"
import express from "express";
import "./db/conn.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes/routes.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));

app.use(router);

app.listen(5000, () => {
    console.log("success")
})