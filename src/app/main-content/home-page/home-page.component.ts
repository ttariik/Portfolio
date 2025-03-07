import { Component } from '@angular/core';
import { MarqueeComponent } from '../../shared/marquee/marquee.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { SvgIconComponent } from '../../shared/svg-icon/svg-icon.component';
import { SeparatorComponent } from '../../shared/separator/separator.component';
import { AboutMeComponent } from '../about-me/about-me.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MarqueeComponent,HeaderComponent, SvgIconComponent, SeparatorComponent,AboutMeComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
