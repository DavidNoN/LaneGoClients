import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public title : string;
  public subtitle: string;

  constructor() { 
    this.title = "LaneGo!"
    this.subtitle = "Plataforma de Concursos"
  }

  ngOnInit() {
  }

}
