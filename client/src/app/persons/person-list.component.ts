import { Component, OnInit } from '@angular/core';
import { CacheService } from '../cache.service';

declare var $:any;

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html'
})
export class PersonListComponent implements OnInit {
  // Will be filled by the service
  persons;
  
  constructor(private service: CacheService) {
  }

  ngOnInit() {
    this.persons = this.service.getAll('person');
    // Collapse the menu if it is visible as drop down
    if ($("#nav-toggle").hasClass("in")){
      $(".collapse").collapse('toggle');
    }
  }
}
