import { Component } from '@angular/core';
import { MarqueeComponent } from '../../shared/marquee/marquee.component';
import { HeaderComponent } from '../../shared/header/header.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MarqueeComponent,HeaderComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
