import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/modules/post';
import { PostService } from 'src/app/services/post.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PostCreateDTO } from 'src/app/DTO/post-create-dto';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  postFormm!: FormGroup;
  showAlert=false;
  

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.postFormm = this.formBuilder.group({
      content: ""
    });
  }

  onSubmit(): void {
    const postCreateDTO: PostCreateDTO = {
      idUser: 1,
      content: this.postFormm.value.content,
      createdDate: new Date() 
    };
    this.postService.createPost(postCreateDTO).subscribe(
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
closeAlert(){
  this.showAlert=false;
}

}
