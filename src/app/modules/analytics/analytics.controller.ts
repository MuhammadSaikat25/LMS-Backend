// import { Request, Response, NextFunction } from "express";
// import catchAsyncError from "../../../utils/catchAsyncErrors";
// // import { generateAnalyticsData } from "../../../utils/analytics.genarator";
// // import UserModel from "../users/user.model";
// // import { OrderModel } from "../order/order.model";
// import { CourseModel } from "../course/course.model";
// import UserModel from "../users/user.model";
// // import { OrderModel } from "../order/order.model";
// // import { CourseModel } from "../course/course.model";

// // ! get User analytics for admin
// const getUserAnalytics = catchAsyncError(
//   async (req: Request, res: Response, next: NextFunction) => {
//     const users = await generateAnalyticsData(UserModel);
//     res.status(200).json({
//       success: true,
//       data: users,
//     });
//   }
// );

// // ! get order analytics for admin
// const getOrderAnalytics = catchAsyncError(
//   async (req: Request, res: Response, next: NextFunction) => {
//     const users = await generateAnalyticsData(OrderModel);
//     res.status(200).json({
//       success: true,
//       data: users,
//     });
//   }
// );

// // ! get course analytics for admin
// const getCourseAnalytics = catchAsyncError(
//   async (req: Request, res: Response, next: NextFunction) => {
//     const users = await generateAnalyticsData(CourseModel);
//     res.status(200).json({
//       success: true,
//       data: users,
//     });
//   }
// );

// export const analyticsController={
//     getUserAnalytics,
//     getOrderAnalytics,
//     getCourseAnalytics
// }