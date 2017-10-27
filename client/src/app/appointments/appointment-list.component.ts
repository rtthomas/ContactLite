import { Component, OnInit } from '@angular/core';
import { Appointment } from '../model/appointment.model';
import { CacheService } from '../cache.service';

declare var $: any;

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html'
})
export class AppointmentListComponent implements OnInit {
  // Will be filled by the service
  appointments;

  constructor(private cache: CacheService) {
  }

  ngOnInit() {
    this.appointments = this.cache.getAll('appointment');
    // Collapse the menu if it is visible as drop down
    if ($('#nav-toggle').hasClass('in')) {
      $('.collapse').collapse('toggle');
    }
  }
  delete (i: number) {
    this.cache.deleteById('appointment', this.appointments[i].id).subscribe(
      (response) => {
        // Refetch the entity array since it might have been sorted prior to the deletion
        this.appointments = this.cache.getAll('appointment');
      }
    );
  }
}
