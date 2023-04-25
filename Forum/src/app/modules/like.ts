import { Post } from "./post";
import { User } from "./user";

export class Like {
    postLikeId: any;
  etat!: boolean;
  user!: User ;
  post!: Post;
}
