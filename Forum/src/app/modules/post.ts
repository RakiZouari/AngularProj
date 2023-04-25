import { User } from "./user";

export class Post {
postId: any;  
    content: any;
    createdDate!: any;
    user !: User | null;
   // postComments: PostComment[];
  //  postLikes: PostLike[];
    likesNumber : any;
    voteCount: any;
    sharesNumber: any;
   // ratings: Rating[];
    //ratingAvg!: number;
  }
