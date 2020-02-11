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

  events: any;
  data: any;

  constructor(private eventService: EventsService) { }

  ngOnInit() {
    this.eventService.getEvents()
      .subscribe(data => this.events = data);
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
