import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.scss']
})
export class CarouselComponent {
  @Input() feedbacks: { name: string, text: string }[] = [];
  currentIndex = 0;

  get currentContainers() {
    const start = this.currentIndex * 3;
    return this.feedbacks.slice(start, start + 3);
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = Math.floor(this.feedbacks.length / 3) - 1; // Schleifen zurück zum letzten Satz
    }
  }

  next() {
    if (this.currentIndex < this.feedbacks.length / 3 - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Schleifen, wenn am Ende angekommen
    }
  }
}
