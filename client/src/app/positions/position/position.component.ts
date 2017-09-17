import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Position } from '../../model/position.model';
import { EntityComponentBase } from '../../entityComponentBase';
import { CacheService } from '../../cache.service';
import { DateTimeService } from '../../datetime.service';


@Component({
  selector: 'app-position',
  templateUrl: './position.component.html'
})
export class PositionComponent extends EntityComponentBase implements OnInit {
  position: Position;
  datePosted: string; // for the html date element, which requires a string yyyy-mm-dd
  dateApplied: string; // for the html date element, which requires a string yyyy-mm-dd
  selectedCompany; // the company name
  selectedPerson; // the person name
  companies = [];
  persons = [];

  private personNameToId = {};
  private personIdToName = {};
  private companyNameToId = {};
  private companyIdToName = {};

  constructor(private router: Router, private route: ActivatedRoute, private service: CacheService, private datetime: DateTimeService) {
    super();
  }

  ngOnInit() {
    this.companies = this.service.getAll('company');
    this.persons = this.service.getAll('person');
    // Map company and person names to their entity ids and vice-versa
    let maps = this.createEntityMaps(this.companies, 'name');
    this.companyNameToId = maps.attributeToId;
    this.companyIdToName = maps.idToAttribute;
    maps = this.createEntityMaps(this.persons, 'name');
    this.personNameToId = maps.attributeToId;
    this.personIdToName = maps.idToAttribute;

    const id = this.route.snapshot.params['id'];
    if (id === 'new') {
      // Creating a new one
      this.position = new Position(null, '', '', null, null, null, null);
    }
    else {
      // Viewing or editing
      this.position = this.service.getByIndex('position', id);
      if (this.position.datePosted) {
        this.datePosted = this.datetime.formatDateForInput(this.position.datePosted);
      }
      if (this.position.dateApplied) {
        this.dateApplied = this.datetime.formatDateForInput(this.position.dateApplied);
      }
      this.selectedCompany = this.companyIdToName[this.position.companyId];
      this.selectedPerson = this.personIdToName[this.position.personId];
    }
  }

  cancel() {
    this.router.navigate(['/positions']);
  }
  save() {
    if (this.datePosted) {
      let posted = new Date();
      let parts: string[] = this.datePosted.split('-');
      posted.setFullYear(+parts[0], +parts[1] - 1, +parts[2]);
      this.position.datePosted = posted.getTime();
    }
    if (this.dateApplied) {
      let applied = new Date();
      parts = this.dateApplied.split('-');
      applied.setFullYear(+parts[0], +parts[1] - 1, +parts[2]);
      this.position.dateApplied = applied.getTime();
    }

    console.log("Posted " + this.position.datePosted + ' : ' + this.datePosted);
    this.service.save('position', this.position);
    this.router.navigate(['/positions']);
  }

  /** Called upon selection of a person from the person selector */
  selectPerson() {
    this.position.personId = this.personNameToId[this.selectedPerson];
  }
  /** Called upon selection of a company from the position selector */
  selectCompany() {
    this.position.companyId = this.companyNameToId[this.selectedCompany];
  }
}
