import express, { NextFunction, Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { userRouter } from "./app/modules/users/user.route";
import { layoutRouter } from "./app/modules/layout/layout.route";
import { courseRouter } from "./app/modules/course/course.route";
import { notificationRouter } from "./app/modules/notification/notification.route";
import { ErrorMiddleware } from "./app/middleware/error";
import { orderRouter } from "./app/modules/order/order.route";


export const app = express();
require("dotenv").config();

app.use(express.json());

app.use(cookieParser());
app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);
app.use("/api/v1", userRouter, layoutRouter,courseRouter,notificationRouter,orderRouter);

app.get("/", (req, res) => {
  res.send("All OK");
});

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`route ${req.originalUrl} not found`) as any;
  err.statsCode = 404;
  next(err);
});

app.use(ErrorMiddleware);
