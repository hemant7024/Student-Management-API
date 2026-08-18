import express from "express";
import cors from "cors";
import router from "./routes/student.routes.js";

const app = express();

app.use(cors({}));

app.use(express.json());

app.use("/api/students",router)

export default app;
