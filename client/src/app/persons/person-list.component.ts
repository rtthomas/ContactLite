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
    // Collapse the menu if it is visible as drop down
    if ($("#nav-toggle").hasClass("in")){
      $(".collapse").collapse('toggle');
    }
  }

  sort(field: string){
    if (field === 'name'){
      this.persons = this.sortList(this.persons, field, false);
    }
    else if (field === 'company'){
      this.persons = this.sortListReferenced(this.persons, 'companyId', 'company', 'name');
    }
  }
}
