import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Person } from '../../model/person.model';
import { EntityComponentBase } from '../../entityComponentBase';
import { CacheService } from '../../cache.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html'
})
export class PersonComponent extends EntityComponentBase implements OnInit {
  person: Person;
  selectedCompany; // the company name
  companies = [];

  private companyIdToName = {};

  constructor(private router: Router, private route: ActivatedRoute, private service: CacheService) {
    super();
  }

  ngOnInit() {
    this.companies = this.service.getAll('company');
    this.companyIdToName = this.mapToAttribute(this.companies, 'name');

    const id = this.route.snapshot.params['id'];
    if (id === 'new') {
      // Creating a new one
      this.person = new Person(null, '', '', '', null);
    }
    else {
      // Viewing or editing
      this.person = this.service.getById('person', id);
      this.selectedCompany = this.companyIdToName[this.person.companyId];
    }
  }

  /** Cancels the dialog */
  cancel() {
    this.router.navigate(['/persons']);
  }

  /** Saves or updates the person */
  save() {
    this.service.save('person', this.person).subscribe(
      (response) => {
        this.router.navigate(['/persons']);
      }
    );
 }

  /** Called upon selection of a company from the company selector */
  select(event) {
    this.person.companyId = this.companies[event.target.options.selectedIndex].id;
  }
}
