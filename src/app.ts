import express, { Request, Response, application } from "express";
const app = express();
import cors from "cors";
import { studentRoutes } from "./app/module/student/student.route";

app.use(express.json());
app.use(cors());

// application route

app.use("/api/v1/students", studentRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
