import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {Injector} from '@angular/core';

import { AppComponent } from './app.component';
import { CompanyListComponent } from './companies/company-list.component';
import { CompanyComponent } from './companies/company/company.component';
import { PositionListComponent } from './positions/position-list.component';
import { PositionComponent } from './positions/position/position.component';
import { PersonListComponent } from './persons/person-list.component';
import { PersonComponent } from './persons/person/person.component';
import { AppointmentListComponent } from './appointments/appointment-list.component';
import { AppointmentComponent } from './appointments/appointment/appointment.component';
import { ContactListComponent } from './contacts/contact-list.component';
import { ContactComponent } from './contacts/contact/contact.component';
import { ServerService } from './server.service';
import { CacheService } from './cache.service';
import { DateTimeService } from './datetime.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material';

const appRoutes: Routes = [
  {path: 'companies', component: CompanyListComponent},
  {path: 'companies/:id', component: CompanyComponent},
  {path: 'positions', component: PositionListComponent},
  {path: 'positions/:id', component: PositionComponent},
  {path: 'appointments', component: AppointmentListComponent},
  {path: 'appointments/:id', component: AppointmentComponent},
  {path: 'contacts', component: ContactListComponent},
  {path: 'contacts/:id', component: ContactComponent},
  {path: 'persons', component: PersonListComponent},
  {path: 'persons/:id', component: PersonComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyComponent,
    PositionListComponent,
    PositionComponent,
    AppointmentListComponent,
    AppointmentComponent,
    ContactListComponent,
    ContactComponent,
    PersonListComponent,
    PersonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [ServerService, CacheService, {provide: LocationStrategy, useClass: HashLocationStrategy}, DateTimeService],
  bootstrap: [AppComponent]
})
export class AppModule { 
    /**
     * Allows for retrieving singletons using `AppModule.injector.get(MyService)`
     * (whereas `ReflectiveInjector.resolveAndCreate(MyService)` would create a
     * new instance of the service).
     */
    static injector: Injector;

    constructor(injector: Injector) {
        AppModule.injector = injector;
    }  
}
