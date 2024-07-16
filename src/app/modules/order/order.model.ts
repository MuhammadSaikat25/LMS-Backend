import { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>(
  {
    courseId: { type: String, required: true },
    userId: String,
    payment_info: Object,
  },
  {
    timestamps: true,
  }
);

export const orderModel = model("order", orderSchema);
