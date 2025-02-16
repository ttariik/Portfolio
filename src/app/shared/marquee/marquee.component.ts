import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.scss'],
})
export class MarqueeComponent {
  items = Array(8).fill({
    remote: 'Available for remote work',
    location: 'Frankfurt am Main',
    role: 'Frontend Developer',
  });
}
