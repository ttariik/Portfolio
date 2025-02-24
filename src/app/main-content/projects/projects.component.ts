import { Component } from '@angular/core';
import { PROJECTS } from './projects.data';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../shared/modal/modal.component';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [CommonModule, ModalComponent] 
})
export class ProjectsComponent {
  projects = PROJECTS;
  selectedProject: any = null;
  selectedProjectIndex: number = -1;

 
  openModal(project: any, index: number): void {
    this.selectedProject = project;
    this.selectedProjectIndex = index;  
  }

  closeModal(): void {
    this.selectedProject = null;
    this.selectedProjectIndex = -1; 
  }

  nextProject(): void {
    const currentIndex = this.projects.findIndex(p => p.name === this.selectedProject.name);
    const nextIndex = (currentIndex + 1) % this.projects.length;  
    this.selectedProject = this.projects[nextIndex];
    this.selectedProjectIndex = nextIndex;  
  }
}
