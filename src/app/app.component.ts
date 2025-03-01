import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { HomePageComponent } from './main-content/home-page/home-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { AboutMeComponent } from './main-content/about-me/about-me.component';
import { SkillSetComponent } from './main-content/skill-set/skill-set.component';
import { ProjectsComponent } from './main-content/projects/projects.component';
import { ContactMeComponent } from './main-content/contact-me/contact-me.component';
import { FeedbackComponent } from './feedback/feedback.component';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MainContentComponent } from './main-content/main-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomePageComponent,
    HeaderComponent,
    AboutMeComponent,
    SkillSetComponent,
    ProjectsComponent,
    ContactMeComponent,
    FeedbackComponent,
    MainContentComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'portfolio';

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private router: Router
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {

      AOS.init({
        offset: 100,
        duration: 1500,
        once: false,
        mirror: false,
        startEvent: 'DOMContentLoaded'
      });

     
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          setTimeout(() => {
            AOS.refresh();
          }, 100);
        }
      });
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {

      setTimeout(() => {
        AOS.refresh();
      }, 100);

  
      window.addEventListener('load', () => {
        AOS.refresh();
      });
    }
  }
}
