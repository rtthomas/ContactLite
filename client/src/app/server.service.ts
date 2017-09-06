import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/**
 * Provides the low level http calls for CRUD operations
 */
@Injectable()
export class ServerService {

  baseUrl: string;

  constructor(private http: Http) {
    if (document.baseURI === 'http://localhost:4200/') {
      // Client loaded from VSCode local server 
      this.baseUrl = 'http://localhost:8888/rest/';
    }
    else {
      // CLient loaded from local or remote App Engine server
      this.baseUrl = document.baseURI + 'rest/';
    }
  }

  /**
   * Fetches all entities of a specified typoe
   * @param entityType the entity type
   */
  getAll(entityType: string) {
    const url = this.baseUrl + entityType;
    return this.http.get(url);
  }

  /**
   * Updates an entity
   * @param entityType the entity type
   * @param entity the entity object (refer to the "model" folder for possible types)
   */
  update(entityType: string, entity: any) {
    const url = this.baseUrl + entityType;
    const converted = this.convertFields(entity);
    return this.http.put(url, converted);
  }

  /**
   * Creates an entity
   * @param entityType the entity type
   * @param entity the entity object (refer to the "model" folder for possible types)
   */
  create(entityType: string, entity: any) {
    const url = this.baseUrl + entityType;
    const converted = this.convertFields(entity);
    return this.http.post(url, converted);
  }

  /**
   * Deletes an entity
   * @param entityType the entity type
   * @param entity the entity object (refer to the "model" folder for possible types)
   */
  delete(entityType: string, entityId) {
    const url = this.baseUrl + entityType + '/' + entityId;
    return this.http.delete(url);
  }

  /**
   * Transforms an object for transmission to the server by
   * - removing functions
   * - removing cache references
   * - converting Date objects to strings in the form "yyyy-mm-ddThh:mm:ssZ"
   * - converts strings representing dates to the same form
   * Note that standard ISO-8601 format ("yyyy-mm-ddThh:mm:ss.sssZ") is not used.
   * This is because a bug the the Google gson package of the server does not accept
   * the standard format, requiring removal of the millisecond portion of the field
   * @input entity the object to transform
   * @return a transform of the object 
   */
  private convertFields(entity: any) {
    const converted = {};
    for (const e in entity) {
      const element = entity[e];
      if (typeof element === 'function') {
        continue;
      }
      if (typeof element === 'string') {
        if (element.length === 10 && element.match('[0-9]{4}-[0-9]{2}-[0-9]{2}')) {
          const parts = element.split('-');
          let date = new Date();
          date.setFullYear(+parts[0], (+parts[1]) - 1, +parts[2]);
          const s = this.convertDate(date);
          converted[e] = s;
          continue;
        }
        else if (element.length === 5 && element.match('[0-9]{2}:[0-9]{2}')) {
          const parts = element.split(':');
          let date = new Date();
          date.setHours(+parts[0], +parts[1]);
          const s = this.convertDate(date);
          converted[e] = s;
          continue;
        }
      }
      else if (element instanceof Date) {
        const s = this.convertDate(element);
        converted[e] = s;
        continue;
      }
      if (e !== 'cache') {
        converted[e] = element;
      }
    }
    return converted;
  }

  getEmail() {
    return this.http.get(this.baseUrl + 'email');
  }
  getEmailContent(id: number) {
    return this.http.get(this.baseUrl + 'email/' + id);
  }


  /** Converts a Date to a string formatted as "yyyy-mm-ddThh:mm:ssZ" */
  private convertDate(date: Date) {
    let s = date.toISOString();
    const l = s.length;
    s = s.substr(0, l - 5) + 'Z';
    return s;
  }
}