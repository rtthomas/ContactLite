import { Entity } from './entity.model';
import { CacheService } from '../cache.service';
import { Injectable } from '@angular/core';
import { AppModule } from '../app.module';
import { DateTimeService } from '../datetime.service';

@Injectable()
export class Email extends Entity {
    cache = AppModule.injector.get(CacheService);
    datetime = AppModule.injector.get(DateTimeService);

    static fromJson(json: any) {
        var p = new Email(
            json.id,
            json.sender,
            json.receiver,
            json.date,
            json.subject,
            json.contentId,
            json.assigned);
        console.log(p);
        return p;
    }

    constructor(
        public id: number,
        public sender: string,
        public receiver: string,
        public date: number,
        public subject: string,
        public contentId: number,
        public assigned: boolean
    ) {super();}

    formatDate() {
        return this.datetime.formatListDate(this.date);
    }
}