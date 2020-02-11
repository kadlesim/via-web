import { Injectable } from '@angular/core';
import {DatePipe} from '@angular/common';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  getEvents(): any {
    return this.http.get('https://via-server.herokuapp.com/events');
  }
}
