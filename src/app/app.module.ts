import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EventsComponent } from './events/events.component';
import { TeamComponent } from './team/team.component';
import { BlogComponent } from './blog/blog.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    EventsComponent,
    TeamComponent,
    BlogComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
