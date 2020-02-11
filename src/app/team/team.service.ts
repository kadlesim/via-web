import { Injectable } from '@angular/core';
import {DatePipe} from '@angular/common';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  getAllPlayers(): any {
    return this.http.get('https://via-server.herokuapp.com/team');
  }
}
