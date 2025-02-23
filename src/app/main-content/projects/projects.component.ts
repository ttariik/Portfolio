import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from './projects.data';
import { ModalComponent } from '../../shared/modal/modal.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ CommonModule, ModalComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: any[] = PROJECTS; 
  
  selectedProject: any = null;

  openModal(project: any): void {
    this.selectedProject = project;
  }

  closeModal(): void {
    this.selectedProject = null;
  }
}
