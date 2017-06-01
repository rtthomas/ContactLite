import { Component, OnInit } from '@angular/core';
import { Company } from '../model/company.model';
import { CompaniesService } from './companies.service';

declare var $:any;

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  constructor(private service: CompaniesService) {
  }

  ngOnInit() {
    this.service.getCompanies(this);
    // Collapse the menu if it is visible as drop down
    if ($("#nav-toggle").hasClass("in")){
      $(".collapse").collapse('toggle');
    }
  }
  delete(index: number){
    this.service.delete(index);
  }
}
