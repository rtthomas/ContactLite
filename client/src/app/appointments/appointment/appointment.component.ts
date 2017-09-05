import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Appointment } from '../../model/appointment.model';
import { EntityComponentBase } from '../../entityComponentBase';
import { CacheService } from '../../cache.service';
import { DateTimeService } from '../../datetime.service';
import { Contact } from '../../model/contact.model';

declare var $:any;

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html'
})
export class AppointmentComponent extends EntityComponentBase implements OnInit {
  appointment: Appointment;
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
      this.appointment = new Appointment(null, null, null, null, null, null);
    }
    else {
      // Viewing or editing
      $('#convert').show();
      this.appointment = this.cache.getByIndex('appointment', this.id);
      if (this.appointment.time) {
        if (this.appointment.time.length === 4) {
          this.appointment.time = '0' + this.appointment.time;
        }
      }
      if (this.appointment.date) {
        this.appointment.date = this.datetime.formatDateForInput(this.appointment.date);
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
    this.cache.save('appointment', this.appointment);
    this.router.navigate(['/appointments']);
  }

  /** Enables display of the Record button if the appointment date/time has passed */
  displayIfConvertible(): string{
    if (this.id === 'new' || !this.appointment.date){
      return 'hidden';
    }
    // Combine the date and time fields
    const day: Date = new Date(this.datetime.formatListDate(this.appointment.date));
    const dateTime = new Date(day.getFullYear(), day.getMonth(), day.getDate());
    if (this.appointment.time){
      const time = this.appointment.time;
      dateTime.setHours(+time.substr(0, 2));
      dateTime.setMinutes(+time.substr(3, 2));
    }
    // Convertible if the date/time has been reached
    const canConvert = dateTime.getTime() < (new Date()).getTime();
    return canConvert ? 'btn btn-primary' : 'hidden';
  }
  /** Converts the appointment to a "meeting" contact */
  convert(){
    const contact = new Contact(null, this.appointment.positionId, this.appointment.personId, this.appointment.date, 'meeting', null, null);
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
