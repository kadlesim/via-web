import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  url = 'https://pd.tymy.cz/api/events?login=simon&password=605323511';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAllPlayers().subscribe(data => console.log(data));
  }

  getAllPlayers(): any {
    const datePipe = new DatePipe('en-UK');
    const endTime = datePipe.transform(Date.now(), 'yyyyMMdd');
    console.log(endTime); /*Md5.hashStr("sem dat moje heslo")*/
    this.url = 'https://pd.tymy.cz/api/users?login=simon&password=' + 'e0fcb7fc608c79e69fdc99ff7050aa72';
    console.log('log url >> ' + this.url);

    return this.http.get(this.url);
    // return this.http.get('http://127.0.0.1:10010/team'); //todo
  }

}
