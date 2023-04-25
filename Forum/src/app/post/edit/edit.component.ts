import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/modules/post';
import { PostService } from 'src/app/services/post.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
postForm!:FormGroup;
  post!:Post;
  @Input() myInputObject!: Post;
  form:boolean=false;
  closeResult!:string;
  

  constructor(
    private postService: PostService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    console.log(this.myInputObject);
    this.postForm = this.formBuilder.group({
      myInputObject: ""
    });
  }

  update(p:Post) {
    content: this.postForm.value.content
    createdDate:this.postForm.value.createdDate
    
    this.postService.updatePost(p).subscribe(
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
      
    
  }

  cancel(){
    this.form = false;
  }
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
}
