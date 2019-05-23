import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course';
  allPost;
  constructor(
    private data: DataService
  ) {

  }

  ngOnInit() {
    this.data.getPost().subscribe(
      (posts: Post[]) => {
        console.log(posts);
        this.allPost = posts;
      }
    );
  }
}
