export interface TComment {
  user: object;
  comment: string;
}

export interface TReview {
  user: object;
  rating: number,
  comment: string;
  commentReplies: TComment[];
}

export interface TLink{
    title:string,
    url:string
}

export interface TCourseData{
    title:string,
    description:string,
    videoUrl:string,
    videoThumbnail:object,
    videoSection:string,
    videoLength:number,
    videoPlayer:string,
    links:TLink[],
    suggestion:string,
    question:TComment[]
}

export interface TCourse{
    name:string,
    description?:string,
    price:number,
    estimatedPrice?:number,
    thumbnail:object,
    tags:string,
    level:string,
    demoUrl:string,
    benefits:{title:string}[],
    prerequisites:{title:string}[],
    reviews:TReview[],
    courseData:TCourseData[],
    ratings?:number,
    purchased?:number
}