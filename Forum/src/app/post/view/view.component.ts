import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Post } from 'src/app/modules/post';
import { PostService } from 'src/app/services/post.service';
import Swal from 'sweetalert2';
import { PostModalComponent } from '../post-modal/post-modal.component';
import { EditComponent } from '../edit/edit.component';



@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
listPosts:any;
  //posts: Post[] = [];
post:any;
closeResult!:string;

form:boolean=false;
constructor(private postService:PostService,private modalService: NgbModal){}




  ngOnInit(): void {
    this.getPosts();
    
    this.post={
      postId : null,
      content: null,
      createdDate:null,
      likesNumber:null,
      idUser:null,
      
    }
    
    }

  getPosts()  {
   return this.postService.getPosts().subscribe(posts =>{this.listPosts = posts;
  });
}
  update(p:Post) {
    
    this.postService.updatePost(p).subscribe(
      
    );
  }
  /*
    open(content: any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
      }
      private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return  `with: ${reason}`;
        }
      }
      */

      closeForm(){
  
      }
      cancel(){
        this.form = false;
      }

      deletePost(postId: any) {
        this.postService.deletePost(postId).subscribe(()=> this.getPosts());
      }

      openDialog(){
        const modalRef = this.modalService.open(PostModalComponent);
        modalRef.componentInstance.post = null;
    }
   
    
    refreshPost(code : number){
      if(code == 200){
        Swal.fire({
          title: 'Suppression avec Success!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }else{
        Swal.fire({
          title: 'Suppression echouée!',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
      this.getPosts();
    }
}
