import { Component } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { ProjectsComponent } from './projects/projects.component';

import { ContactMeComponent } from './contact-me/contact-me.component';
import { FeedbackComponent } from '../feedback/feedback.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HomePageComponent, AboutMeComponent, SkillSetComponent, ProjectsComponent, FeedbackComponent, ContactMeComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
