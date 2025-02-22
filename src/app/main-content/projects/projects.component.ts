import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from './projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: any[] = PROJECTS; 
}
