import { Entity } from './entity.model';
import { CacheService } from '../cache.service';
import { Injectable } from '@angular/core';
import { AppModule } from '../app.module';
import { DateTimeService } from '../datetime.service';

@Injectable()
export class Contact extends Entity {
    cache = AppModule.injector.get(CacheService);
    datetime = AppModule.injector.get(DateTimeService);
    isEmail: boolean;
    isPhone: boolean;

    static fromJson(json: any) {
        const p = new Contact(
            json.id, 
            json.positionId, 
            json.personId, 
            json.date,   
            json.type, 
            json.details, 
            json.emailId);
        console.log(p);
        return p;
    }

    constructor(
        public id: number,
        public positionId: number,
        public personId: number,
        public date: number,
        public type: string,
        public details: string,
        public emailId: number
    ) { super();}

    getPositionTitle(){
        if (this.positionId){
            const position = this.cache.getById('position', this.positionId);
            return position.title;
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

    formatDate() {
        return this.datetime.formatListDate(this.date);
    }
}