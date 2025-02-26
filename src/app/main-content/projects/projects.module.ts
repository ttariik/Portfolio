import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ModalComponent } from '../../shared/modal/modal.component';  

@NgModule({
  declarations: [
    ProjectsComponent,
    ModalComponent,  
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ProjectsComponent,  
  ]
})
export class ProjectsModule { }
