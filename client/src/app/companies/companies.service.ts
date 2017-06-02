import { Injectable } from '@angular/core';
import { Company } from '../model/company.model';
import { ServerService } from '../server.service';

@Injectable()
export class CompaniesService {
  entityName = 'company';
  cache;
  listComponent;

  constructor(private serverService: ServerService) { }

  public getCompanies(listComponent: any) {
    this.listComponent = listComponent;
    if (this.cache === undefined) {
      this.serverService.getAll(this);
    }
    listComponent[listComponent.listName]= this.cache;
  }

  public getCompany(index: number) {
    return this.cache[index];
  }

  /**
   * Creates or updates according to whether the id is null
   */
  public save(company: Company) {
    this.serverService.save(this, company);
  }

  public delete(index: number) {
    var company = this.cache[index];
    this.serverService.delete(this, index);
  }
}
