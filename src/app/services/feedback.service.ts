import { Injectable } from '@angular/core';

export interface Feedback {
  id: number;
  name: string;
  text: string;
}

@Injectable({
  providedIn: 'root' // Macht den Service global verfügbar
})
export class FeedbackService {
  private feedbacks: Feedback[] = [
    { id: 1, name: 'Alice', text: 'Tolles Portfolio!' },
    { id: 2, name: 'Bob', text: 'Sehr sauberer Code!' },
    { id: 3, name: 'Charlie', text: 'Mega Design!' }
  ];

  getFeedbacks(): Feedback[] {
    return this.feedbacks;
  }
}
