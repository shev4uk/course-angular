import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { SinglePostComponent } from './single-post/single-post.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'post/:id', component: SinglePostComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
