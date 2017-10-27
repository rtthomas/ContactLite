import { Component, OnInit } from '@angular/core';
import { CacheService } from '../cache.service';
import { ListComponentBase } from '../listComponentBase';

declare var $:any;

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html'
})
export class PersonListComponent extends ListComponentBase implements OnInit {
  // Will be filled by the cache
  persons;
  
  constructor(cache: CacheService) {
    super(cache);
  }

  ngOnInit() {
    this.persons = this.cache.getAll('person');
    // Set a 'deletable' attribute to any peson if not referenced by a contact or appointment
    for (const person of this.persons){
      person.deletable = !this.isReferencedBy('person', person.id, ['position', 'appointment', 'contact']);
    }
    // Collapse the menu if it is visible as drop down
    if ($('#nav-toggle').hasClass('in')){
      $('.collapse').collapse('toggle');
    }
  }

  isNotDeletable(i: number) {
    return this.persons[i].deletable ? 'hidden' : 'delete-cell';
  }
  isDeletable(i: number, small: boolean) {
    if (small) {
      return this.persons[i].deletable ? 'material-icons' : 'hidden';
    }
    else {
      return this.persons[i].deletable ? 'delete-cell' : 'hidden';
    }
  }
  delete (i: number) {
    this.cache.deleteById('person', this.persons[i].id).subscribe(
      (response) => {
        // Refetch the entity array since it might have been sorted prior to the deletion
        this.persons = this.cache.getAll('person');
      }
    );
  }
  sort(field: string){
    if (field === 'name'){
      this.persons = this.sortList(this.persons, field);
    }
    else if (field === 'company'){
      this.persons = this.sortListReferenced(this.persons, 'companyId', 'company', 'name');
    }
  }
}
