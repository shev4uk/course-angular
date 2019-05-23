import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';

const ApiUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getPost() {
    return this.http.get(`${ApiUrl}/posts`);
  }
}
