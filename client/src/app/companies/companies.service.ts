import { Injectable } from '@angular/core';
import { Company } from '../model/company.model';
import { ServerService } from '../server.service';

@Injectable()
export class CompaniesService {
  companies;
  listComponent;

  constructor(private serverService: ServerService) { }

  public getCompanies(listComponent: Object) {
    this.listComponent = listComponent;
    if (this.companies === undefined) {
      this.serverService.getAll('company').subscribe(
        (response) => {
          console.log(response);
          this.companies = response.json();
          listComponent['companies'] = this.companies;
        },
        (error) => {
          console.log(error)
        }
      );
    }
    listComponent['companies'] = this.companies;
  }

  public getCompany(index: number) {
    return this.companies[index];
  }

  /**
   * Creates or updates according to whether the id is null
   */
  public save(company: Company) {
    this.serverService.save('company', company).subscribe(
      (response) => {
        if (!company.id){
          company.id = response.json();
          this.listComponent.companies.push(company);
        }
      },
      (error) => {
        console.log(error)
      }
    );
  }

  public delete(index: number){
    this.serverService.delete('company', this.companies[index]).subscribe(
      (response) => {
        this.companies.splice(index, 1);
      },
      (error) => {
        console.log(error)
      }
    );
    
  }
}
