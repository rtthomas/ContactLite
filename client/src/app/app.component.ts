import { Component } from '@angular/core';
import { CacheService } from './cache.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private cache: CacheService, private router: Router) { }

  ngOnInit() {
    this.cache.initialize();
    this.router.navigate(['/']);
  }
}
