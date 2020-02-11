import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  url: any;

  constructor(private http: HttpClient) { }

  getPosts(): any {
    this.url = '../../assets/blogdata.json';
    console.log('log url >> ' + this.url);
    return this.http.get(this.url);
  }
}
