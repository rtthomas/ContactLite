import { Component, OnInit } from '@angular/core';
import { Company } from '../model/company.model';
import { CacheService } from '../cache.service';
import {ListComponentBase } from '../listComponentBase';

declare var $:any;

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
    // Collapse the menu if it is visible as drop down
    if ($("#nav-toggle").hasClass("in")){
      $(".collapse").collapse('toggle');
    }
  }

  sort(field: string){
    this.companies = this.sortList(this.companies, field, false);
  }
}
