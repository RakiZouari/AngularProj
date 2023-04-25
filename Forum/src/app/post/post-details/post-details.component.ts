import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  @Input() post !: any;

  constructor(private modalService: NgbModal ) { }

  ngOnInit(): void {
  }

  CloseModal(){
    this.modalService.dismissAll();
  }
}
