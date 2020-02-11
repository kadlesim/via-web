import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {TeamService} from './team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  players: any;
  data: any;
  datao: any;
  dataw: any;
  datam: any;
  dataoActive: any;
  datawActive: any;
  datamActive: any;
  women: boolean;
  open: boolean;
  mix: boolean;
  all: boolean;
  playersLoaded: boolean;

  constructor(private teamService: TeamService) {
  }

  ngOnInit() {
    this.women = false;
    this.open = false;
    this.mix = true;
    // this.all = true;
    this.datao = [];
    this.dataw = [];
    this.dataoActive = [];
    this.datawActive = [];
    this.datamActive = [];
    this.teamService.getAllPlayers()
      .subscribe(data => {
        this.players = data;
        for (const player of this.players) {
          if (player.gender === 'FEMALE') {
            this.dataw.push(player);
            if (player.status === 'PLAYER') {
              this.datawActive.push(player);
            }
          } else if (player.gender === 'MALE') {
            this.datao.push(player);
            if (player.status === 'PLAYER') {
              this.dataoActive.push(player);
            }
          }
          if (player.status === 'PLAYER') {
            this.datamActive.push(player);
          }
        }
      });
    console.log('showPlayers');
  }


  showOpen() {
    console.log('show men');
    this.open = !this.open;
    if (this.open) {
      // this.all = false;
      this.women = false;
      this.mix = false;
    } else {
      this.open = !this.open;
    }
    const o = document.getElementById('open-btn');
    if (this.open && (o.style.color === 'white' || o.style.color === '')) {
      o.style.color = 'gray';
      document.getElementById('mix-btn').style.color = 'white';
      document.getElementById('women-btn').style.color = 'white';
    } else {
      o.style.borderBottomColor = 'white';
    }
  }

  showWomen() {
    console.log('show women');
    this.women = !this.women;
    if (this.women) {
      // this.all = false;
      this.open = false;
      this.mix = false;
    } else {
      this.women = !this.women;
    }
    const x = document.getElementById('women-btn');
    if (this.women && (x.style.color === 'white' || x.style.color === '')) {
      x.style.color = 'gray';
      document.getElementById('mix-btn').style.color = 'white';
      document.getElementById('open-btn').style.color = 'white';
    } else {
      x.style.color = 'white';
    }
  }

  showMix() {
    console.log('show mix');
    this.mix = !this.mix;
    if (this.mix) {
      // this.all = false;
      this.open = false;
      this.women = false;
    } else {
      this.mix = !this.mix;
    }
    const x = document.getElementById('mix-btn');
    if (this.mix && (x.style.color === 'white' || x.style.color === '')) {
      x.style.color = 'gray';
      document.getElementById('open-btn').style.color = 'white';
      document.getElementById('women-btn').style.color = 'white';
    } else {
      x.style.color = 'white';
    }
  }

  // showAll() {
  //   // console.log(this.players);
  //   return this.all;
  // }

}
