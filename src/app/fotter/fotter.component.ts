import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fotter',
  standalone: true,
  imports: [NgIf],
  templateUrl: './fotter.component.html',
  styleUrl: './fotter.component.scss'
})
export class FotterComponent {
  showFotter: boolean = true;
  constructor(private router: Router) {}  // Inject Router here

  ngOnInit(): void {
    // Check if we are on the login or register page
    if (this.router.url === '/login' || this.router.url === '/register') {
      this.showFotter = false;
    } else {
      this.showFotter = true;
    }
  }
}
