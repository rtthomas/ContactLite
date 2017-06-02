import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, RequestOptionsArgs } from '@angular/http';

@Injectable()
export class ServerService {

  baseUrl = "http://localhost:8888/rest/";

  constructor(private http: Http) { }

  getAll(requestingService: any) {
    var url = this.baseUrl + requestingService.entityName;
    this.http.get(url).subscribe(
      (response) => {
        console.log(response);
        requestingService.cache = response.json();
        requestingService.listComponent[requestingService.listComponent.listName] = requestingService.cache;
      },
      (error) => {
        console.log(error)
      }
    );
  }

  save(requestingService: any, entity: any) {
    var url = this.baseUrl + requestingService.entityName;

    if (entity.id) {
      // Update
      this.http.put(url, entity).subscribe(
        (response) => {
          console.log('Updated ' + entity);
          console.log(requestingService.cache);
        },
        (error) => {
          console.log(error)
        }
      );
    }
    else {
      // Create
      this.http.post(url, entity).subscribe(
        (response) => {
          entity.id = response.json();
          requestingService.cache.push(entity);
          console.log('Created ' + entity);
          console.log(requestingService.cache);
        },
        (error) => {
          console.log(error)
        }
      );
    }
  }

  get(baseUrl: string, type: string, id: number) {

  }

  delete(requestingService: any, index: number) {
    var url = this.baseUrl + requestingService.entityName;
    var entity = requestingService.cache[index];
    var args: RequestOptionsArgs = { search: 'key=' + entity.id };
    this.http.delete(url, args).subscribe(
      (response) => {
        requestingService.cache.splice(index, 1);
        console.log('Deleted ' + entity);
        console.log(requestingService.cache);
     },
      (error) => {
        console.log(error)
      }
    );
  }
}