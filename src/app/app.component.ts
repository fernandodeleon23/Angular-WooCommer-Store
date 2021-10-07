import { Component } from '@angular/core';
import { Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tienda-woocommerce';
  loading: boolean = true;

  constructor(
    private router: Router
  ){
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {

      window.scrollTo(0, 0);
      setTimeout(() => { // here
        this.loading = false;
      }, 1300);
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      window.scrollTo(0, 0);
      setTimeout(() => { // here
        this.loading = false;
      }, 1000);
    }
    if (event instanceof NavigationError) {
      window.scrollTo(0, 0);
      setTimeout(() => { // here
        this.loading = false;
      }, 1000);
    }
  }
}
