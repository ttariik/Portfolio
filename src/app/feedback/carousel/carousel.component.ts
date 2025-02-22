import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Feedback {
  id: number;
  name: string;
  role: string;
  comment: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  @Input() feedbackList: Feedback[] = [];

  currentIndex = 0;

  moveNext(): void {
    this.currentIndex = this.calculateNextIndex();
  }

  movePrevious(): void {
    this.currentIndex = this.calculatePreviousIndex();
  }

  jumpToIndex(index: number): void {
    if (index >= 0 && index < this.feedbackList.length) {
      this.currentIndex = index;
    }
  }

  fetchVisibleFeedback() {
    return this.feedbackList.filter((_, index) =>
      this.isVisibleFeedbackIndex(index)
    );
  }

  private calculateNextIndex(): number {
    return (this.currentIndex + 1) % this.feedbackList.length;
  }

  private calculatePreviousIndex(): number {
    return (
      (this.currentIndex - 1 + this.feedbackList.length) %
      this.feedbackList.length
    );
  }

  private isVisibleFeedbackIndex(index: number): boolean {
    const prevIndex = this.calculatePreviousIndex();
    const nextIndex = this.calculateNextIndex();
    return (
      index === prevIndex || index === this.currentIndex || index === nextIndex
    );
  }
}
