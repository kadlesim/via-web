import {Component, Injectable, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class EventsComponent implements OnInit {

  url = 'https://pd.tymy.cz/api/events?login=simon&password=605323511';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEvents().subscribe(data => console.log(data));
  }

  getEvents(): any {
    // const endTime = new Date().getFullYear() + '' + new Date().getMonth() + '' + new Date().getDate();
    const datePipe = new DatePipe('en-UK');
    const endTime = datePipe.transform(Date.now(), 'yyyyMMdd');
    console.log(endTime); /*Md5.hashStr("sem dat moje heslo")*/
    // tslint:disable-next-line:max-line-length
    this.url = 'https://pd.tymy.cz/api/events?login=simon&password=' + 'e0fcb7fc608c79e69fdc99ff7050aa72&filter=endTime>' + endTime +  '&order=startTime&limit=10';
    // this.url = '../../assets/eventData.json'; //dummy data
    console.log('log url >> ' + this.url); // endTime<' + endTime + '
    // console.log();

    return this.http.get(this.url);
  }

}
