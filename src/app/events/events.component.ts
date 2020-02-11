import {Component, Injectable, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {EventsService} from './events.service';

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
  events: any;
  data: any;
  eventsLoaded: boolean;

  constructor(private eventService: EventsService) { }

  ngOnInit() {
    this.eventService.getEvents()
      .subscribe(data => this.events = {
        data: data.data
      }.data);
    console.log('showEvents');
  }

  goToUrl(url: any): void {
    // document.location.href = url;
    window.open(url);
  }

  showEvents() {
    console.log(this.events);
    return true;
  }



}
