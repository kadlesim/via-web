import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-xkcd',
  templateUrl: './xkcd.component.html',
  styleUrls: ['./xkcd.component.css']
})
export class XkcdComponent implements OnInit {

  chuck: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.chuck = [];
    for (let i = 0; i < 10; i++) {
      this.getLatestComic().subscribe(data => {
        this.chuck.push(data.value);
        // console.log(this.chuck.value);
      });
    }
    console.log(this.chuck);
  }

  getLatestComic(): any {
    // return this.http.get('https://api.adviceslip.com/advice');
    return this.http.get('https://api.chucknorris.io/jokes/random');
  }

}
