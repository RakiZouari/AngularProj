import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../modules/post';
import { Observable } from 'rxjs';
import { PostCreateDTO } from '../DTO/post-create-dto';
import { Like } from '../modules/like';
import { User } from '../modules/user';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  postsUrl="http://localhost:8088/SpringMVC/posts/allPost";

  private baseUrl = 'http://localhost:8088/SpringMVC/posts/addPost';

  private apiUrl = 'http://localhost:8088/SpringMVC/posts';
 
  constructor (private http:HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }


  createPost(postCreateDTO: PostCreateDTO): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<any>(this.baseUrl, postCreateDTO, httpOptions);
  }

 
  getPostById(postId: number): Observable<Post> {
    const url = `${this.apiUrl}/${postId}`;
    return this.http.get<Post>(url);
  }
  
  updatePost(post: Post): Observable<Post> {
    console.log(post);
    const url = `${this.apiUrl}/updatePost`;
    return this.http.put<Post>(url, post);
  }

  deletePost(postId:any){
    return this.http.delete("http://localhost:8088/SpringMVC/posts/supp/"+postId);
		
	}


  likePost(postId: number, userid: number) {
   
    return this.http.post(`${this.apiUrl}/${postId}/${userid}/like`,null);
  }

  dislikelikePost(postId: number, userid: number) {
   
    return this.http.post(`${this.apiUrl}/${postId}/${userid}/dislike`,null);
  }

  

  
}
