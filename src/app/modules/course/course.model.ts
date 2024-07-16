import { model, Schema } from "mongoose";
import { TCourse, TCourseData, TLink, TReview } from "./course.interface";

const ReviewSchema = new Schema<TReview>({
  user: { type: Object },
  rating: { type: Number, default: 0 },
  comment: String,
});
const CommentSchema = new Schema({
  user: Object,
  comment: String,
});
const LinkSchema = new Schema<TLink>({
  title: String,
  url: String,
});
const CourseDataSchema = new Schema<TCourseData>({
  title: String,
  description: String,
  videoUrl: String,
  videoThumbnail: Object,
  videoSection: String,
  videoLength: Number,
  videoPlayer: String,
  links: [LinkSchema],
  suggestion: String,
  question: [CommentSchema],
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
      require: true,
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
