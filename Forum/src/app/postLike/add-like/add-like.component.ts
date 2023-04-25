import { Component, Input } from '@angular/core';
import { User } from 'src/app/modules/user';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-like',
  templateUrl: './add-like.component.html',
  styleUrls: ['./add-like.component.css']
})
export class AddLikeComponent {
  @Input() post: any;
  etat =false;

idUser!: number;


  constructor(private postService: PostService) { }

  

  

  likePost(postId: number, user: User) {
   
  }

}
