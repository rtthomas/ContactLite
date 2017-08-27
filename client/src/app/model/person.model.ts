import { CacheService } from '../cache.service';
import { Injectable } from '@angular/core';
import { AppModule } from '../app.module';
import { Entity} from './entity.model';


@Injectable()
export class Person  extends Entity{
    cache = AppModule.injector.get(CacheService);

    static fromJson(json: any){
        const p = new Person(json.id, json.name,  json.email, json.phone, json.companyId);
        console.log(p);
        return p;
    }
    
    constructor(
        public id: number, 
        public name: string, 
        public email: string, 
        public phone: string, 
        public companyId: number)
        { super();}

    
    getCompanyName(){
        if (this.companyId){
            const company = this.cache.getById('company', this.companyId);
            return company.name;
        }
        else {
            return "not specified";
        }
    }
}