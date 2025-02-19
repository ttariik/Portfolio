import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-separator',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './separator.component.html',
  styleUrl: './separator.component.scss'
})
export class SeparatorComponent {

}
