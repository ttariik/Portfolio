import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { CommonModule } from '@angular/common';

interface Feedback {
  id: number;
  name: string;
  role: string;
  comment: string;
}

interface FeedbackSection {
  title: string;
  feedbackList: Feedback[];
}

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CarouselComponent, CommonModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
  feedbackSection: FeedbackSection = {
    title: 'What my colleagues say about me',
    feedbackList: [
      {
        id: 1,
        name: '',
        role: 'Team Partner',
        comment: ''
      },
      {
        id: 2,
        name: '',
        role: 'Team Partner',
        comment: ''
      },
      {
        id: 3,
        name: '',
        role: 'Team Partner',
        comment: ''
      }
    ]
  };
}
