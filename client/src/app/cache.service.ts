import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Company } from './model/company.model';
import { Person } from './model/person.model';
import { Position } from './model/position.model';
import { Appointment } from './model/appointment.model';
import { Contact } from './model/contact.model';
import { Email } from './model/email.model';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
/** 
 * Maintains cached copies of all entities. Each entity type ('company', 'person', etc.) is 
 * used to access the corresponding cache arrays. The entity type also forms the path segment
 * in the REST api 
 */
export class CacheService {

  private entityCache = {
    company: {
      array: [],
      idToEntity: {}
    },
    person: {
      array: [],
      idToEntity: {}
    },
    position: {
      array: [],
      idToEntity: {}
    },
    contact: {
      array: [],
      idToEntity: {}
    },
    appointment: {
      array: [],
      idToEntity: {}
    },
    email: {
      array: [],
      idToEntity: {}
    },
  };

  /** Email content is "lazy" fetched from the server  */
  private emailContentCache = {};

  constructor(private server: ServerService) { }

  /** Initializes the cache from the server */
  initialize() {

    this.server.getAll('company').subscribe(
      (response) => {
        this.entityCache['company'].array = response.json();
        this.convertToClasses(this.entityCache['company'].array, 'company');
        this.mapIdToEntity('company');

        this.server.getAll('person').subscribe(
          (response) => {
            this.entityCache['person'].array = response.json();
            this.convertToClasses(this.entityCache['person'].array, 'person');
            this.mapIdToEntity('person');

            this.server.getAll('position').subscribe(
              (response) => {
                this.entityCache['position'].array = response.json();
                this.convertToClasses(this.entityCache['position'].array, 'position');
                this.mapIdToEntity('position');

                this.server.getAll('appointment').subscribe(
                  (response) => {
                    this.entityCache['appointment'].array = response.json();
                    this.convertToClasses(this.entityCache['appointment'].array, 'appointment');
                    this.mapIdToEntity('appointment');

                    this.server.getAll('contact').subscribe(
                      (response) => {
                        this.entityCache['contact'].array = response.json();
                        this.convertToClasses(this.entityCache['contact'].array, 'contact');
                        this.mapIdToEntity('contact');

                        this.server.getAll('email').subscribe(
                          (response) => {
                            this.entityCache['email'].array = response.json();
                            this.convertToClasses( this.entityCache['email'].array, 'email');
                            this.mapIdToEntity('email');
                          }
                        );
                      }
                    );
                  }
                );
              }
            );
          }
        );
      }
    );
  }

  /** 
   * Converts JSON representation of an entity into an object of the entity'e class 
   * @param array the entity array
   * @param type the entity type
   */
  private convertToClasses(array: any, type: string) {
    for (let i = 0; i < array.length; i++) {
      const elem = array[i];
      switch (type) {
        case 'company': array[i] = Company.fromJson(elem); break;
        case 'person': array[i] = Person.fromJson(elem); break;
        case 'position': array[i] = Position.fromJson(elem); break;
        case 'appointment': array[i] = Appointment.fromJson(elem); break;
        case 'contact': array[i] = Contact.fromJson(elem); break;
        case 'email': array[i] = Email.fromJson(elem); break;
      }
    }
  }

  /**
   * Creates a map of entity id to entity object
   * @param type the entity type
   */
  private mapIdToEntity(type: string) {
    const array = this.entityCache[type].array;
    for (let i = 0; i < array.length; i++) {
      const entity = array[i];
      this.entityCache[type].idToEntity[entity.id] = entity;
    }
  }

  /**
   * Returns all entities of a given type as an array. 
   * @param type the entity type
   */
  getAll(type: string) {
    return this.entityCache[type].array;
  }

  /**
   * Returns a map of id to entity for a specified entity type all entities of a given type as an array. 
   * @param type the entity type
   */
  getIdMap(type: string) {
    return this.entityCache[type].idToEntity;
  }

  /** Gets an entity specified by its array index */
  getByIndex(type: string, index: number) {
    return this.entityCache[type].array[index];
  }

  /** Gets an entity specified by its id */
  getById(type: string, id: number) {
    return this.entityCache[type].idToEntity[id];
  }

  /**
   * Fetches the text body content of an email from the server and caches it
   * @param id the id of the email entity
   * @return an Observable providing the email text 
   */
  getEmailContent(id: number) {
    return Observable.create((observer: Observer<string>) => {

      const text:string = this.emailContentCache[id];
      if (text) {
        // Text is already in the cache
        observer.next(text);
      }
      else {
        // Retrieve from the server and store in the cache
        this.server.getEmailContent(id).subscribe(
          (response) => {
            const text = response.json().text;
            this.emailContentCache[id] = text;
            observer.next(text);
          }
        );
      }
    });
  }

  /** 
   * Creates or updates an entity
   * @param type the entity type
   * @param entity the entity object
   */
  save(type: string, entity: any) {
    if (entity.id) {
      // Update
      this.server.update(type, entity).subscribe(
        (response) => { },
        (error) => {
          console.log(error);
        }
      );
    }
    else {
      // Create
      this.server.create(type, entity).subscribe(
        (response) => {
          entity.id = response.json();
          // Add it to the cache and the id to entity map
          this.entityCache[type].array.push(entity);
          const id = entity['id'];
          this.entityCache[type].idToEntity[id] = entity;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  /** 
   * Deletes an entity
   * @param type the entity type
   * @param index the index of the object in the cached entity array
   */
  deleteByIndex(type: string, index: number) {
    const entity = this.entityCache[type].array[index];
    this.delete(type, entity.id, index);
  }

  /** 
   * Deletes an entity 
   * @param type the entity type
   * @param id the entity id
   */
  deleteById(type: string, id: number){
    // Locate index in the cache array
    for (let index = 0; index < this.entityCache[type].array.length; index++){
      const entity = this.entityCache[type].array[index];
      if (entity.id === id){
        break;
      } 
    }
    this.delete(type, id, index);
  }

  /** Sends the delete requrst to the server removes the entity from the cache array */
  private delete(type: string, id: number, index: number){
    this.server.delete(type, id).subscribe(
      (response) => {
        // Remove the entity from the cache array
        this.entityCache[type].array.splice(index, 1);
        console.log('Deleted ' + type + ' ' + id);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}