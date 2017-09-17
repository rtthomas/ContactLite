import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from '../../model/contact.model';
import { Email } from '../../model/email.model';
import { CacheService } from '../../cache.service';
import { EntityComponentBase } from '../../entityComponentBase';
import { DateTimeService } from '../../datetime.service';

declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent extends EntityComponentBase implements OnInit {
  contact: Contact;
  date: string; // for the html date element, which requires a string yyyy-mm-dd
  selectedPerson; // the company name
  selectedPosition; // the company name
  isEmail: boolean;
  isPhone: boolean;
  isMeeting: boolean;
  emailText: string;
  emailSubject: string = '';
  persons = [];
  positions = [];
  emails = [];

  private personIdToName = {};
  private personNameToId = {};
  private positionIdToTitle = {};
  private positionTitleToId = {};
  private selectedEmailIndex: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cache: CacheService,
    private datetime: DateTimeService) {
    super();
  }

  ngOnInit() {
    this.persons = this.cache.getAll('person');
    this.positions = this.cache.getAll('position');
    // Map person and position names to their entity ids and vice-versa
    let maps = this.createEntityMaps(this.positions, 'title');
    this.positionIdToTitle = maps.idToAttribute;
    this.positionTitleToId = maps.attributeToId;
    maps = this.createEntityMaps(this.persons, 'name');
    this.personIdToName = maps.idToAttribute;
    this.personNameToId = maps.attributeToId;

    // Retrieve email list, filter out assigned ones
    this.emails = this.cache.getAll('email').filter(
      (email: Email) => { return !email.assigned; }
    );

    const id = this.route.snapshot.params['id'];
    if (id === 'new') {
      // Creating a new one
      this.contact = new Contact(null, null, null, null, undefined, '', null);
      this.isEmail = false;
      this.isPhone = false;
      this.isMeeting = false;
    }
    else {
      // Viewing or editing
      this.contact = this.cache.getByIndex('contact', id);
      if (this.contact.date) {
        this.date = this.datetime.formatDateForInput(this.contact.date);
      }
      if (this.contact.positionId) {
        this.selectedPosition = this.positionIdToTitle[this.contact.positionId];
      }
      if (this.contact.personId) {
        this.selectedPerson = this.personIdToName[this.contact.personId];
      }
      if (this.contact.type === 'email') {
        this.isEmail = true;
      }
      else if (this.contact.type === 'phone') {
        this.isPhone = true;
      }
      else {
        this.isMeeting = true;
        $('#save-button').removeAttr('disabled');
      }
    }
  }

  cancel() {
    this.router.navigate(['/contacts']);
  }
  save() {
    if (this.date) {
      let date = new Date();
      const parts: string[] = this.date.split('-');
      date.setFullYear(+parts[0], +parts[1] - 1, +parts[2]);
      this.contact.date = date.getTime();
    }
    if (this.isEmail) {
      this.contact.type = 'email';
      const email: Email = this.emails[this.selectedEmailIndex];
      email.assigned = true;
      this.cache.save('email', email);
    }
    else if (this.isPhone) {
      this.contact.type = 'phone';
    }
    else {
      this.contact.type = 'meeting';
    }
    this.cache.save('contact', this.contact);
    this.router.navigate(['/contacts']);
  }

  /** Called upon selection of a person from the person selector */
  selectPerson() {
    this.contact.personId = this.personNameToId[this.selectedPerson];
  }

  /** Called upon selection of a position from the position selector */
  selectPosition() {
    this.contact.positionId = this.positionTitleToId[this.selectedPosition];
  }

  /** Called when Email radio button clicked */
  setEmail() {
    this.isEmail = true;
    this.isPhone = false;
  }

  /** Called when Phone radio button clicked */
  setPhone() {
    this.isEmail = false;
    this.isPhone = true;
    $('#save-button').removeAttr('disabled');
  }

  /** Called when email selected from the email list */
  selectEmail(index: number) {
    this.selectedEmailIndex = index;
    const email: Email = this.emails[index];
    this.contact.emailId = email.id;
    this.contact.date = email.date;
    $('#save-button').removeAttr('disabled');
  }

  /** Called when View button clicked, opens the email content popup */
  viewEmail(index: number) {
    const email = this.emails[index];
    this.cache.getEmailContent(email.contentId).subscribe(
      (text: string) => this.emailText = text);
    this.emailSubject = email.subject;
    $('#message-text').show();
  }
  /** Closes the email content popup */
  hideContent() {
    $('#message-text').hide();
  }
}
