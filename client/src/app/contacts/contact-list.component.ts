import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contact } from '../model/contact.model';
import { Position } from '../model/position.model';
import { Email } from '../model/email.model';
import { CacheService } from '../cache.service';
import { Subscriber } from 'rxjs/Subscriber';
import { ListComponentBase } from '../listComponentBase';

declare var $:any;

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent extends ListComponentBase implements OnInit, OnDestroy {
  contacts;
  emailText: string;
  emailSubject:string;

  private subscriber:Subscriber<string>;

  constructor(cache: CacheService) {
    super(cache);
  }

  ngOnInit() {
    this.contacts = this.cache.getAll('contact');
    // Collapse the menu if it is visible as drop down
    if ($('#nav-toggle').hasClass('in')){
      $('.collapse').collapse('toggle');
    }
  }
  ngOnDestroy() {
    if (this.subscriber){
      this.subscriber.unsubscribe();
    }
  }

  showIfEmail(index: number){
    const contact:Contact = this.contacts[index];
    return contact.type === 'email' ? '' : 'hidden';
  }
  showIfPhone(index: number){
    const contact:Contact = this.contacts[index];
    return contact.type === 'phone' || contact.type === 'meeting' ? '' : 'hidden';
  }

  /** Called when a View Email link is clicked */
  viewEmail(index: number){
    const contact:Contact = this.contacts[index];
    const email:Email = this.cache.getById('email', contact.emailId);
    this.emailSubject = email.subject;
    this.subscriber = this.cache.getEmailContent(email.contentId).subscribe(
      (text:string) => {
        this.emailText = text;
        $('#message-text').show();
      }
    );
  }
  closeEmail(){
    $('#message-text').hide();
  }

  sort(field: string){
    if (field === 'date'){
      this.contacts = this.sortList(this.contacts, field);
    }
    else if (field === 'person'){
      this.contacts = this.sortListReferenced(this.contacts, 'personId', 'person', 'name');
    }
    else if (field === 'position'){
      this.contacts = this.sortListReferenced(this.contacts, 'positionId', 'position', 'title');
    }
    else if (field === 'company'){
      this.contacts = this.sortListReferenced(this.contacts, 'companyId', 'company', 'name');
    }
  }

  getPositionReference(id: number){
    const contact: Contact = this.cache.getById('contact', id);
    if (!contact.positionId){
      return;
    }
    const position: Position = this.cache.getById('position', contact.positionId);
    return position.reference;
  }
}
