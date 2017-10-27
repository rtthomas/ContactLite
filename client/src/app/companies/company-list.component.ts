import { Component, OnInit } from '@angular/core';
import { Company } from '../model/company.model';
import { CacheService } from '../cache.service';
import {ListComponentBase } from '../listComponentBase';

declare var $: any;

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html'
})
export class CompanyListComponent extends ListComponentBase implements OnInit {
  
  companies;
  
  constructor(cache: CacheService) {
    super(cache);
  }

  ngOnInit() {
    this.companies = this.cache.getAll('company');
    // Set a 'deletable' attribute to any company if not referenced by a position or person
    for (const position of this.companies){
      position.deletable = !this.isReferencedBy('company', position.id, ['position', 'person', 'appointment', 'contact']);
    }
    // Collapse the menu if it is visible as drop down
    if ($('#nav-toggle').hasClass('in')) {
      $('.collapse').collapse('toggle');
    }
  }

  isNotDeletable(i: number) {
    return this.companies[i].deletable ? 'hidden' : 'delete-cell';
  }
  isDeletable(i: number, small: boolean) {
    if (small) {
      return this.companies[i].deletable ? 'material-icons' : 'hidden';
    }
    else {
      return this.companies[i].deletable ? 'delete-cell' : 'hidden';
    }
  }
  delete (i: number) {
    this.cache.deleteById('company', this.companies[i].id).subscribe(
      (response) => {
        // Refetch the entity array since it might have been sorted prior to the deletion
        this.companies = this.cache.getAll('company');
      }
    );
  }
  sort(field: string) {
    this.companies = this.sortList(this.companies, field);
  }
}
