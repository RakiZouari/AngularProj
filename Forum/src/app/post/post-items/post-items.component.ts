import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from 'src/app/services/post.service';
import { PostModalComponent } from '../post-modal/post-modal.component';
import { Post } from 'src/app/modules/post';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post-items',
  templateUrl: './post-items.component.html',
  styleUrls: ['./post-items.component.css']
})
export class PostItemsComponent implements OnInit {

  @Input() post = {
    postId:null,
    content:null,
    likesNumber:null,
    createdDate:null,
    user:{
      idUser:null,
      nomUser:null,

    }
  }

  @Output() deletePost = new EventEmitter();
  closeResult!:string;

  constructor( private modalService: NgbModal , private postservice: PostService) { }

  ngOnInit(): void {
    console.log(this.post);
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


deletePostt(postId : any){
  this.postservice.deletePost(postId).subscribe(() =>{} );
  this.deletePost.emit("200");
}

like(postid:any){
  this.postservice.likePost(postid,1).subscribe(() =>{
    Swal.fire({
      title: 'like !',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  } );
 
}

dislike(postid:any){
  this.postservice.likePost(postid,1).subscribe(() =>{
    Swal.fire({
      title: 'Dislike !',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  } );
 
}


openModal(postt : any) {
  const modalRef = this.modalService.open(PostModalComponent);
  modalRef.componentInstance.post = postt;
}


openDetails(postt : any) {
  const modalRef = this.modalService.open(PostModalComponent);
  modalRef.componentInstance.post = postt;
  modalRef.componentInstance.view= true ; 
}


}
