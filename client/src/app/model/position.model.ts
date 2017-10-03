import { Entity } from './entity.model';
import { CacheService } from '../cache.service';
import { Injectable } from '@angular/core';
import { AppModule } from '../app.module';
import { DateTimeService } from '../datetime.service';

@Injectable()
export class Position extends Entity {
  cache = AppModule.injector.get(CacheService);
  datetime = AppModule.injector.get(DateTimeService);

  static fromJson(json: any) {
    let p = new Position(
      json.id,
      json.title,
      json.url,
      json.reference,
      json.dateApplied,
      json.datePosted,
      json.companyId,
      json.personId
    );
    console.log(p);
    return p;
  }

  constructor(
    public id: number,
    public title: string,
    public url: string,
    public reference: string,
    public dateApplied: number,
    public datePosted: number,
    public companyId: number,
    public personId: number
  ) { super(); }

  getCompanyName() {
    if (this.companyId) {
      const company = this.cache.getById('company', this.companyId);
      return company.name;
    }
    else {
      return '';
    }
  }

  getPersonName() {
    if (this.personId) {
      const person = this.cache.getById('person', this.personId);
      return person.name;
    }
    else {
      return '';
    }
  }
  formatDateApplied() {
        return this.datetime.formatListDate(this.dateApplied);
  }
  formatDatePosted() {
        return this.datetime.formatListDate(this.datePosted);
  }
}

