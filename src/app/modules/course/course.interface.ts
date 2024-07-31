export interface TComment {
  user: object;
  comment: string;
}

export interface TReview {
  user: object;
  rating: number;
  comment: string;
  commentReplies: TComment[];
}


export interface TCourseData {
  module: string;
  linksUrl: { title: string; url: string }[];
  videos: { title: string; url: string }[];
}

export interface TCourse {
  name: string;
  description?: string;
  price: number;
  estimatedPrice?: number;
  thumbnail: object;
  tags?: string;
  level: string;
  demoUrl: string;
  benefits: { title: string }[];
  prerequisites: { title: string }[];
  reviews?: TReview[];
  courseData: TCourseData[];
  ratings?: number;
  purchased?: number;
}
