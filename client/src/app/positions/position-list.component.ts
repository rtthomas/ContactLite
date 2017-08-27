import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CacheService } from '../cache.service';

declare var $:any;

@Component({
  selector: 'app-positions',
  templateUrl: './position-list.component.html'
})
export class PositionListComponent implements OnInit {
  // Will be filled by the cache service
  positions;

  constructor(private cache: CacheService) { }

  ngOnInit() {
    this.positions = this.cache.getAll('position');
    // Add a 'deletable' attribute to any position if not referenced by a contact or appointment
    for (const position of this.positions){
      this.checkIfDeletable(position);
    }
    // Collapse the menu if it is visible as drop down
    if ($("#nav-toggle").hasClass("in")){
      $(".collapse").collapse('toggle');
    }
  }

  isNotDeletable(i: number){
    return this.positions[i].deletable ? 'hidden' : 'delete-cell';
  }
  isDeletable(i: number, small: boolean){
    if (small){
      return this.positions[i].deletable ? 'material-icons' : 'hidden';
    }
    else {
      return this.positions[i].deletable ? 'delete-cell' : 'hidden';     
    }
  }

  private checkIfDeletable(position){
    const appointments = this.cache.getAll('appointment');
    for (const appointment of appointments){
      if (appointment.positionId === position.id){
        return;
      }
    }
    const contacts = this.cache.getAll('contact');
    for (const contact of contacts){
      if (contact.positionId === position.id){
        return;
      }
    }
    position.deletable=true;
  }
}
