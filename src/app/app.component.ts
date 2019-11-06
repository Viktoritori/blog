import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private location: Location,
              private router: Router) {}

  goBack() {
    this.location.back();
  }

  navigateToFeed() {
    this.router.navigate(['']);
  }
}
