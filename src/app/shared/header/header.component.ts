import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;
  currentLanguage = 'EN'; // Startwert auf 'EN' setzen

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen; 
  }

  toggleLanguage(): void {
    this.currentLanguage = this.currentLanguage === 'EN' ? 'DE' : 'EN'; // Wechsel zwischen EN und DE
  }
}
