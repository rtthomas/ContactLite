import { Component, OnInit } from '@angular/core';
import { Company } from '../model/company.model';
import { CacheService } from '../cache.service';

declare var $:any;

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html'
})
export class CompanyListComponent implements OnInit {
  
  companies;
  
  constructor(private service: CacheService) {
  }

  ngOnInit() {
    this.companies = this.service.getAll('company');
    // Collapse the menu if it is visible as drop down
    if ($("#nav-toggle").hasClass("in")){
      $(".collapse").collapse('toggle');
    }
  }
}
