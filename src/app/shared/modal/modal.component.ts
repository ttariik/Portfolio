import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],

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
