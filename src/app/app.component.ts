import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './main-content/home-page/home-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { AboutMeComponent } from './main-content/about-me/about-me.component';
import { SkillSetComponent } from './main-content/skill-set/skill-set.component';
import { ProjectsComponent } from './main-content/projects/projects.component';
import { ContactMeComponent } from './main-content/contact-me/contact-me.component';
import { FeedbackComponent } from './feedback/feedback.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomePageComponent, HeaderComponent, AboutMeComponent, SkillSetComponent, ProjectsComponent, ContactMeComponent, FeedbackComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
