import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class JoinComponent {

}
