import { Injectable } from '@angular/core';
import {DatePipe} from '@angular/common';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  url = 'https://pd.tymy.cz/api/events?login=simon&password=605323511';

  constructor(private http: HttpClient) { }

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

    /// mock data
    const url = '../../assets/eventData.json';
    return this.http.get(url);

    // return this.http.get(this.url);
    // return this.http.get('http://127.0.0.1:10010/events');//todo
  }
}
