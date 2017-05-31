import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Collapse the menu if it is visible as drop down
    if ($(".navbar-toggle").css("display") == 'block'){
      $(".collapse").collapse('toggle');
    }
  }
}
