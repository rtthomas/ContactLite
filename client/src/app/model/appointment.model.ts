import { Entity} from './entity.model';
import { CacheService } from '../cache.service';
import { Injectable } from '@angular/core';
import { AppModule } from '../app.module';
import { DateTimeService } from '../datetime.service';

@Injectable()
export class Appointment extends Entity{
    
    cache = AppModule.injector.get(CacheService);
    datetime = AppModule.injector.get(DateTimeService);

    static fromJson(json: any){
        let p = new Appointment(
            json.id, 
            json.companyId, 
            json.personId, 
            json.dateTime,  
            json.positionId);
        console.log(p);
        return p;
    }

    constructor(
        public id: number,
        public companyId: number,
        public personId: number,
        public dateTime: number,
        public positionId: number
    ) { super(); }
    
    getCompanyName(){
        if (this.companyId){
            const company = this.cache.getById('company', this.companyId);
            return company.name;
        }
        else {
            return '';
        }
    }
    getPersonName(){
        if (this.personId){
            const person = this.cache.getById('person', this.personId);
            return person.name;
        }
        else {
            return '';
        }
    }
    getPositionTitle(){
         if (this.positionId){
            const position = this.cache.getById('position', this.positionId);
            return position.title;
        }
        else {
            return '';
        }
     }
    formatDate(){
        return this.datetime.formatListDate(this.dateTime);
    }
    formatTime(){
        return this.datetime.formatListTime(this.dateTime);
    }
}