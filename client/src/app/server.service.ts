import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, RequestOptionsArgs } from '@angular/http';

@Injectable()
export class ServerService {

  baseUrl = "http://localhost:8888/rest/";

  constructor(private http: Http){}

  getAll(type: string){
    var url = this.baseUrl + type;
    return this.http.get(url);
  }

  save(type: string, entity: any){
    var url = this.baseUrl + type;
    if (entity.id){
      // Update
      return this.http.put(url, entity);
    }
    else {
      //Create
      return this.http.post(url, entity);
    }
  }

  get(baseUrl: string, type: string, id: number){

  }

  delete(type: string, entity: any){
    var url = this.baseUrl + type;
    var args: RequestOptionsArgs = {search: 'key='+ entity.id};
    return this.http.delete(url, args);
  }
}