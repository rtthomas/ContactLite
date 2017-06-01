import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Company } from '../../model/company.model';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  company: Company;

  constructor(private router: Router, private route: ActivatedRoute, private service: CompaniesService) { }

  ngOnInit() {
    var id = this.route.snapshot.params['id'];
    if (id == 'new'){
      // Creating a new one
      this.company = new Company(null, '','','','','');
    }
    else {
      // Viewing or editing
      this.company = this.service.getCompany(id);
    }
  }

  cancel(){
    this.router.navigate(['/companies']);
  }
  save(){
    if (!this.company.url){
      this.company.url = '';
    }
    if (!this.company.phone){
      this.company.phone = '';
    }
    this.service.save(this.company);
    this.router.navigate(['/companies']);
  }

}
