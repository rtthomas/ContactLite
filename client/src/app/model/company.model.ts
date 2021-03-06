import { Entity} from './entity.model';

export class Company extends Entity {
    static fromJson(json: any){
        var p = new Company(json.id, json.address, json.city, json.name,  json.phone, json.url, json.login, json.password);
        console.log(p);
        return p;
    }
    constructor(
        public id: number,
        public address: string,
        public city: string,
        public name: string,
        public phone: string,
        public url: string,
        public login: string,
        public password: string
    ) { super(); }

}
