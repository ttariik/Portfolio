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
        name: 'I.Karakasidis',
        role: 'Team Partner Join',
        comment: 'Working with Tarik has been a great experience. His attention to detail and problem-solving mindset made a significant impact on our project. He is highly reliable, communicates effectively, and always brings innovative ideas to the table. His technical skills and teamwork attitude made collaboration smooth and enjoyable. I truly appreciate his dedication and would be happy to work with him again in the future.'
      },
      {
        id: 2,
        name: 'M. Joe-Sedlmaier',
        role: 'Team Partner Join',
        comment: 'Tarik is an outstanding programmer with exceptional skills in development and system optimization. His problem-solving mindset, deep technical expertise, and collaborative nature make him a valuable team member. He consistently delivers high-quality results and fosters a positive team dynamic.'
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
