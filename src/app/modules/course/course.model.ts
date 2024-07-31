import { model, Schema } from "mongoose";
import { TCourse, TCourseData, TReview } from "./course.interface";

const ReviewSchema = new Schema<TReview>({
  user: { type: Object },
  rating: { type: Number, default: 0 },
  comment: String,
});

const CourseDataSchema = new Schema<TCourseData>({
  module: String,
  linksUrl: [{ title: String, url: String }],
  videos: [{ title: String, url: String }],
});

const CourseSchema = new Schema<TCourse>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    estimatedPrice: { type: Number },
    thumbnail: {
      public_id: String,
      url: String,
    },
    tags: {
      type: String,
    },
    level: {
      type: String,
      require: true,
    },
    demoUrl: {
      type: String,
      require: true,
    },
    benefits: [{ title: String }],
    prerequisites: [{ title: String }],
    reviews: [ReviewSchema],
    courseData: [CourseDataSchema],
    ratings: {
      type: Number,
      default: 0,
    },
    purchased: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const CourseModel = model("Course", CourseSchema);
