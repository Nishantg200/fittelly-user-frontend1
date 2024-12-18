import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showHeader: boolean = true;
  constructor(private router: Router) {}  // Inject Router here

  ngOnInit(): void {
    // Check if we are on the login or register page
    if (this.router.url === '/login' || this.router.url === '/register') {
      this.showHeader = false;
    } else {
      this.showHeader = true;
    }
  }
}
