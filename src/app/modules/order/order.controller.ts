import { Request, Response, NextFunction } from "express";
import { orderService } from "./order.service";
import catchAsyncError from "../../utils/catchAsyncErrors";
import { ErrorHandler } from "../../utils/ErrorHandler";
import { orderModel } from "./order.model";

const createOrder = catchAsyncError(
  async (req: Request & { user: any }, res: Response, next: NextFunction) => {
    const { courseId, paymentInfo } = req.body;
    const user = req.user._id;

    const result = await orderService.createOrder({
      courseId,
      paymentInfo,
      user,
    });
    res.json({
      success: true,
      message: "Course purchased successful",
      data: result,
    });
  }
);

// ! get all order for admin
const getAllOrderByAdmin = catchAsyncError(
  async (req: Request & { user: any }, res: Response, next: NextFunction) => {
    try {
      const result = await orderModel.find().sort({ createdAt: -1 });
      res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, 400));
    }
  }
);

export const orderController = {
  createOrder,
  getAllOrderByAdmin,
};
