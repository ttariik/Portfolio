import { Component } from '@angular/core';
import { MarqueeComponent } from '../marquee/marquee.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MarqueeComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
