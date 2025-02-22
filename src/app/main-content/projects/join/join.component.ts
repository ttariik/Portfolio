import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JoinComponent {
  technologies = ['HTML', 'CSS', 'JavaScript', 'Firebase'];
}
