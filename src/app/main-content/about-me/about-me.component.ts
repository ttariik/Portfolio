import { Component, AfterViewInit } from '@angular/core';
import { SvgIconComponent } from '../../shared/svg-icon/svg-icon.component';
import { SkillSetComponent } from '../skill-set/skill-set.component';
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [SvgIconComponent, SkillSetComponent],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']  
})
export class AboutMeComponent  {

}
