import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Company } from '../../model/company.model';
import { CacheService } from '../../cache.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html'
})
export class CompanyComponent implements OnInit {
  company: Company;

  constructor(private router: Router, private route: ActivatedRoute, private service: CacheService) { }

  ngOnInit() {
    const  id = this.route.snapshot.params['id'];
    if (id == 'new'){
      // Creating a new one
      this.company = new Company(null, '','','','','');
    }
    else {
      // Viewing or editing
      this.company = this.service.getByIndex('company', id);
    }
  }

  cancel(){
    this.router.navigate(['/companies']);
  }
  save(){
    this.service.save('company', this.company);
    this.router.navigate(['/companies']);
  }

}
