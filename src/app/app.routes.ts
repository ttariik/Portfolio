import { Routes } from '@angular/router';
import { HomePageComponent } from './main-content/home-page/home-page.component';
import { AboutMeComponent } from './main-content/about-me/about-me.component';
import { SkillSetComponent } from './main-content/skill-set/skill-set.component';
import { ProjectsComponent } from './main-content/projects/projects.component';
import { ContactMeComponent } from './main-content/contact-me/contact-me.component';
import { FeedbackComponent } from './feedback/feedback.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'skills', component: SkillSetComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactMeComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: '**', redirectTo: '' } 
];
