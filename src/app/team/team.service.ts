import { Injectable } from '@angular/core';
import {DatePipe} from '@angular/common';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  url = 'https://pd.tymy.cz/api/events?login=simon&password=605323511';

  constructor(private http: HttpClient) { }

  getAllPlayers(): any {
    const datePipe = new DatePipe('en-UK');
    const endTime = datePipe.transform(Date.now(), 'yyyyMMdd');
    console.log(endTime); /*Md5.hashStr("sem dat moje heslo")*/
    this.url = 'https://pd.tymy.cz/api/users?login=simon&password=' + 'e0fcb7fc608c79e69fdc99ff7050aa72';
    console.log('log url >> ' + this.url);

    /// mock data
    const url = '../../assets/playersData.json';
    return this.http.get(url);

    // return this.http.get(this.url);
    // return this.http.get('http://127.0.0.1:10010/team'); //todo
  }
}
