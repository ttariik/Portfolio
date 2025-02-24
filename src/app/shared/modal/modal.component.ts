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
  @Input() projectIndex!: number;  
  @Output() nextProjectEvent = new EventEmitter<void>();  
  @Output() closeModalEvent = new EventEmitter<void>(); 

  stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
  }


  onOverlayClick(event: MouseEvent): void {
    this.close();
  }

 
  nextProject(): void {
    this.nextProjectEvent.emit(); 
  }


  close() {
    this.closeModalEvent.emit(); 
  }
}
