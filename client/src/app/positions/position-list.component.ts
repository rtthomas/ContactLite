import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CacheService } from '../cache.service';
import { ListComponentBase } from '../listComponentBase';

declare var $: any;

@Component({
  selector: 'app-positions',
  templateUrl: './position-list.component.html'
})
export class PositionListComponent extends ListComponentBase implements OnInit {
  // Will be filled by the cache service
  positions;

  constructor(cache: CacheService) {
    super(cache);
  }

  ngOnInit() {
    this.positions = this.cache.getAll('position');
    // Set a 'deletable' attribute to any position if not referenced by a contact or appointment
    for (const position of this.positions){
      position.deletable = !this.isReferencedBy('position', position.id, ['appointment', 'contact']);
    }
    // Collapse the menu if it is visible as drop down
    if ($('#nav-toggle').hasClass('in')) {
      $('.collapse').collapse('toggle');
    }
  }

  isNotDeletable(i: number) {
    return this.positions[i].deletable ? 'hidden' : 'delete-cell';
  }
  isDeletable(i: number, small: boolean) {
    if (small) {
      return this.positions[i].deletable ? 'material-icons' : 'hidden';
    }
    else {
      return this.positions[i].deletable ? 'delete-cell' : 'hidden';
    }
  }

  delete (i: number) {
    this.cache.deleteById('position', this.positions[i].id).subscribe(
      (response) => {
        // Refetch the entity array since it might have been sorted prior to the deletion
        this.positions = this.cache.getAll('position');
      }
    );
  }

  sort(field: string){
    if (field === 'title') {
      this.positions = this.sortList(this.positions, field);
    }
    else if (field === 'company') {
      this.positions = this.sortListReferenced(this.positions, 'companyId', 'company', 'name');
    }
    else if (field === 'person') {
      this.positions = this.sortListReferenced(this.positions, 'personId', 'person', 'name');
    }
    else if (field === 'datePosted') {
      this.positions = this.sortList(this.positions, field);
    }
    else if (field === 'dateApplied') {
      this.positions = this.sortList(this.positions, field);
    }
  }
}
