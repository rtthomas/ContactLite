import { Injectable } from '@angular/core';
import { Company } from '../model/company.model';
import { ServerService } from '../server.service';

@Injectable()
export class CompaniesService {
  companies;

  constructor(private serverService: ServerService) { }

  public getCompanies(target: Object) {
    if (this.companies === undefined) {
      this.serverService.getAll('company').subscribe(
        (response) => {
          console.log(response);
          this.companies = response.json();
          target['companies'] = this.companies;
        },
        (error) => {
          console.log(error)
        }
      );
    }
    target['companies'] = this.companies;
  }

  public getCompany(id: number) {
    return this.companies[id - 1];
  }
  public create(company: Company) {
    this.companies.push(company);
  }
}
