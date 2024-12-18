import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FotterComponent } from './fotter/fotter.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { LoaderComponent } from './loader/loader.component'; // Import the loader component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CommonModule,
    FotterComponent,
    NavHeaderComponent,
    LoaderComponent // Import the loader component here
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  mobile = false;
  showHeader = true;
  showFotter = true;
  loading = false; // Add a flag to control loader visibility

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkViewport();  // Check viewport size on component load

    // Listen to route changes to hide/show header/footer on login and register pages
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loading = true; // Show loader when navigation starts
      } else if (event instanceof NavigationEnd || event instanceof NavigationError) {
        this.loading = false; // Hide loader when navigation ends or errors
        this.checkAuthenticationPage(); // Update header/footer visibility
      }
    });
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkViewport();  // Check viewport size on window resize
  }

  private checkViewport() {
    this.mobile = window.innerWidth <= 768;  // Adjust the threshold for mobile screens
  }

  // Check if the current page is login or register
  private checkAuthenticationPage() {
    const currentUrl = this.router.url;
    // Hide header and footer for login and register pages
    if (currentUrl === '/login' || currentUrl === '/register') {
      this.showHeader = false;
      this.showFotter = false;
    } else {
      this.showHeader = true;
      this.showFotter = true;
    }
  }

  // This method could be used for other logic related to authentication pages
  isAuthenticationPage(): boolean {
    const currentUrl = this.router.url;
    return currentUrl === '/login' || currentUrl === '/register';
  }
}
