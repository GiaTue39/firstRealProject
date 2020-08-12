import { Component, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, take } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private renderer: Renderer2,
    private router: Router
  ) {
    this.hideSplashScreen();
  }

  private hideSplashScreen() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      take(1)
    ).subscribe(() => {
      const splashScreen = document.querySelector('#splash-screen');
      const appRoot = document.querySelector('#app-root');

      setTimeout(() => {
        this.renderer.setStyle(splashScreen, 'display', 'none');
        this.renderer.setStyle(appRoot, 'opacity', '1');
      }, 3500);
    });
  }
}
