import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SvgIconComponent } from '../../shared/svg-icon/svg-icon.component';


interface Feedback {
  id: number;
  name: string;
  role: string;
  comment: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() feedbackList: Feedback[] = [];
  currentIndex = 0;

  moveNext(): void {
    console.log('moveNext aufgerufen');
    this.currentIndex = this.calculateNextIndex();
  }

  movePrevious(): void {
    console.log('movePrevious aufgerufen');
    this.currentIndex = this.calculatePreviousIndex();
  }

  jumpToIndex(index: number): void {
    if (index >= 0 && index < this.feedbackList.length) {
      this.currentIndex = index;
    }
  }

  fetchVisibleFeedback() {
    if (!this.feedbackList.length) return [];
    const prevIndex = this.calculatePreviousIndex();
    const nextIndex = this.calculateNextIndex();
    return [
      this.feedbackList[prevIndex],
      this.feedbackList[this.currentIndex],
      this.feedbackList[nextIndex],
    ];
  }

  private calculateNextIndex(): number {
    return (this.currentIndex + 1) % this.feedbackList.length;
  }

  private calculatePreviousIndex(): number {
    return (this.currentIndex - 1 + this.feedbackList.length) % this.feedbackList.length;
  }
}
