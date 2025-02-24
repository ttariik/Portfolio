import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],

  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() project: any;
  @Input() projectIndex: number = 0;
  @Output() closeModal = new EventEmitter<void>();

  joinDescription = [
    { title: 'What is this project about?' },
    {
      description: `
      Task manager inspired by the Kanban System.
      Create and organize tasks using drag and drop functions,
      assign users and categories.
      `
      },
  ];

  joinIcons: { name: string; label: string }[] = [
    { name: 'html-green-icon', label: 'HTML' },
    { name: 'css-green-icon', label: 'CSS' },
    { name: 'javascript-green-icon', label: 'JavaScript' },
    { name: 'firebase-green-icon', label: 'Firebase' }
  ];
  

  actionHandler(action: any) {}

  close() {
    this.closeModal.emit();
  }

  stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
  }

  onOverlayClick(event: MouseEvent): void {
    this.close();
  }
}
