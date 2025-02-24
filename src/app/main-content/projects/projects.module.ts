// src/app/main-content/projects/projects.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ModalComponent } from '../../shared/modal/modal.component';  // Vergewissere dich, dass der Pfad korrekt ist.

@NgModule({
  declarations: [
    ProjectsComponent,
    ModalComponent,  // Füge auch das ModalComponent hier hinzu, falls es im Modul verwendet wird
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ProjectsComponent,  // Stelle sicher, dass der ProjectsComponent exportiert wird
  ]
})
export class ProjectsModule { }
