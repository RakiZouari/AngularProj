import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './post/view/view.component';
import { CreateComponent } from './post/create/create.component';

import { EditComponent } from './post/edit/edit.component';
const routes: Routes = [
  { path: 'Post', component: ViewComponent }
  
 // { path: 'create-post', component: CreateComponent },

 // {path : "edit-post", component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule { }
