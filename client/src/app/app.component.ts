import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CacheService } from './cache.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  initialized = false;
  constructor(private cache: CacheService, private router: Router) { }

  ngOnInit() {
    const observable: Observable<any> = this.cache.initialize();
    observable.subscribe(
      (next: any) => { },
      (error: any) => { },
      () => {
        this.initialized = true;
        console.log("Initialized");
        this.router.navigate(['/']);
      }
    );
  }
}
