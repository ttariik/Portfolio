import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './caroussel/caroussel.component';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, CarouselComponent], 
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {
  feedbacks = [
    { name: "Alice", text: "Great work!" },
    { name: "Bob", text: "Awesome project!" }
  ];
}
