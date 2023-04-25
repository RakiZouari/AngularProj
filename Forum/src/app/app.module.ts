import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponent } from './post/create/create.component';
import { ViewComponent } from './post/view/view.component';
import { EditComponent } from './post/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostModalComponent } from './post/post-modal/post-modal.component';
import { PostItemsComponent } from './post/post-items/post-items.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TabBarComponent } from './shared/tab-bar/tab-bar.component';
import { AddLikeComponent } from './postLike/add-like/add-like.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ViewComponent,
    EditComponent,
    PostItemsComponent,
    PostModalComponent,
    PostDetailsComponent,
    NavbarComponent,
    TabBarComponent,
    AddLikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
