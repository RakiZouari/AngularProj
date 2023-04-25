import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostCreateDTO } from 'src/app/DTO/post-create-dto';
import { Post } from 'src/app/modules/post';
import { PostService } from 'src/app/services/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.css']
})
export class PostModalComponent implements OnInit {

  
  @Input() post !: any;
  form : boolean = false;
  postForm!: FormGroup;
  showAlert=false;
  @Input() myInputObject!: Post;
  closeResult! : string;
  view :boolean =false;
  constructor(private router:Router ,private route:ActivatedRoute , private postservice: PostService ,private formBuilder: FormBuilder ,  private modalService: NgbModal) { }
  
  

  

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      myInputObject: "",
      content : this.myInputObject.content
    });
    this.myInputObject = this.post;
    console.log(this.view);
  }


 

  addPost() :void{
   
    const postCreateDTO: PostCreateDTO = {
      idUser: 1,
      content: this.postForm.value.content,
      createdDate: new Date() // ou utiliser une bibliothèque de gestion des dates comme moment.js
    };
      this.postservice.createPost(postCreateDTO).subscribe(
        post =>{
        this.modalService.dismissAll();
        Swal.fire({
          title: 'post ajouter avec Success!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      },
          Error =>{
        Swal.fire({
          title: 'ajouter avec echouée!',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      });
    

  
  }

  
  closeForm(){

  }
  cancel(){
    this.form = false;
  }
 /* updatePost(p:Post) {
   this.myInputObject.content= this.postForm.value.content
   console.log(this.myInputObject) 
    this.postservice.updatePost(this.myInputObject).subscribe(
      post =>{
        this.modalService.dismissAll();
        Swal.fire({
          title: 'Post modifier avec Success!',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      },
          Error =>{
        Swal.fire({
          title: 'modifier avec echouée!',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      });
      */
  
 

    closeAlert(){
      this.showAlert=false;
    }

}
