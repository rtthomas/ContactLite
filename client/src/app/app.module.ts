import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CompanyListComponent } from './companies/company-list.component';
import { CompanyComponent } from './companies/company/company.component';
import { PositionsComponent } from './positions/positions.component';
import { PositionComponent } from './positions/position/position.component';
import { HomeComponent } from './home/home.component';
import { CompaniesService } from './companies/companies.service';
import { ServerService } from './server.service';

const appRoutes: Routes = [
  {path: 'companies', component: CompanyListComponent},
  {path: 'companies/:id', component: CompanyComponent},
  {path: 'positions', component: PositionsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyComponent,
    PositionsComponent,
    PositionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CompaniesService, ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
