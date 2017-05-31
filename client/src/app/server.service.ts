import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';

@Injectable()
export class ServerService {

  baseUrl = "http://localhost:8888/rest/";

  constructor(private http: Http){}

  getAll(type: string){
    var url = this.baseUrl + type;
    // Creates an observable
    return this.http.get(url);
  }

  create(type: string, entity: any){

  }

  get(baseUrl: string, type: string, id: number){

  }

  update(type: string, entity: any){

  }
}