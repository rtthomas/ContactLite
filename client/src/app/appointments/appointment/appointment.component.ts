import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Appointment } from '../../model/appointment.model';
import { EntityComponentBase } from '../../entityComponentBase';
import { CacheService } from '../../cache.service';
import { DateTimeService } from '../../datetime.service';
import { Contact } from '../../model/contact.model';

declare var $: any;

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html'
})
export class AppointmentComponent extends EntityComponentBase implements OnInit {
  appointment: Appointment;
  time: string; // for the html time element, which requires a string hh:mm
  date: string; // for the html date element, which requires a string yyyy-mm-dd
  selectedCompany: string; // the company name
  selectedPerson: string; // the person name
  selectedPosition: string; // the position title
  companies = [];
  persons = [];
  positions = [];

  private personNameToId = {};
  private personIdToName = {};
  private companyNameToId = {};
  private companyIdToName = {};
  private positionIdToTitle = {};
  private positionTitleToId = {};
  private id;

  constructor(private router: Router, private route: ActivatedRoute, private cache: CacheService, private datetime: DateTimeService) {
    super();
  }

  ngOnInit() {
    this.companies = this.cache.getAll('company');
    this.persons = this.cache.getAll('person');
    this.positions = this.cache.getAll('position');
    // Map company, person and position names/title to their entity ids and vice-versa
    let maps = this.createEntityMaps(this.companies, 'name');
    this.companyNameToId = maps.attributeToId;
    this.companyIdToName = maps.idToAttribute;
    maps = this.createEntityMaps(this.persons, 'name');
    this.personNameToId = maps.attributeToId;
    this.personIdToName = maps.idToAttribute;
    maps = this.createEntityMaps(this.positions, 'title');
    this.positionTitleToId = maps.attributeToId;
    this.positionIdToTitle = maps.idToAttribute;

    this.id = this.route.snapshot.params['id'];
    if (this.id === 'new') {
      $('#convert').hide();
      // Creating a new one
      this.appointment = new Appointment(null, null, null, null, null);
    }
    else {
      // Viewing or editing
      $('#convert').show();
      this.appointment = this.cache.getById('appointment', this.id);
      if (this.appointment.dateTime) {
        const date: Date = new Date(this.appointment.dateTime);

        let h: string = Number(date.getHours()).toString();
        if (h.length === 1) {
          h = '0' + h;
        }

        let m: string = Number(date.getMinutes()).toString();
        if (m.length === 1) {
          m = '0' + m;
        }

        this.time = h + ":" + m;
        if (this.time.length === 4) {
          this.time = '0' + this.appointment.dateTime;
        }
        this.date = this.datetime.formatDateForInput(this.appointment.dateTime);
      }
      this.selectedCompany = this.companyIdToName[this.appointment.companyId];
      this.selectedPerson = this.personIdToName[this.appointment.personId];
      this.selectedPosition = this.positionIdToTitle[this.appointment.positionId];
    }
  }

  cancel() {
    this.router.navigate(['/appointments']);
  }
  save() {
    let dateTime = new Date();
    if (this.time){
      const timeParts: string[] = this.time.split(':');
      dateTime.setHours(+timeParts[0]);
      dateTime.setMinutes(+timeParts[1]);
    }
    if (this.date) {
      const dateParts: string[] = this.date.split('-');
      dateTime.setFullYear(+dateParts[0], +dateParts[1] - 1, +dateParts[2]);
      this.appointment.dateTime = dateTime.getTime();
    }
    this.cache.save('appointment', this.appointment);
    this.router.navigate(['/appointments']);
  }

  /** Enables display of the Record button if the appointment date/time has passed */
  displayIfConvertible(): string {
    if (this.id === 'new' || !this.appointment.dateTime) {
      return 'hidden';
    }
    const dateTime: Date = new Date(this.appointment.dateTime);
    // Convertible if the date/time has been reached
    const canConvert = dateTime.getTime() < (new Date()).getTime();
    return canConvert ? 'btn btn-primary' : 'hidden';
  }
  /** Converts the appointment to a "meeting" contact */
  convert() {
    const contact = new Contact(null, this.appointment.companyId, this.appointment.positionId, this.appointment.personId, this.appointment.dateTime, 'meeting', null, null);
    this.cache.save('contact', contact);
    this.cache.deleteById('appointment', this.appointment.id);
  }

  /** Called upon selection of a company from the company selector */
  selectCompany() {
    this.appointment.companyId = this.companyNameToId[this.selectedCompany];
  }
  /** Called upon selection of a person from the person selector */
  selectPerson() {
    this.appointment.personId = this.personNameToId[this.selectedPerson];
  }
  /** Called upon selection of a position from the position selector */
  selectPosition() {
    this.appointment.positionId = this.positionTitleToId[this.selectedPosition];
  }

}
