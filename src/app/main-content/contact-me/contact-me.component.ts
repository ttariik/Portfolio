import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, FooterComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  privacyAccepted: boolean = false;

  sendMessage() {
    if (!this.privacyAccepted) {
      alert('Please accept the privacy policy.');
      return;
    }

    console.log('Message sent!', {
      name: this.name,
      email: this.email,
      message: this.message
    });

    // Hier könnte man eine API-Anfrage oder einen weiteren Prozess starten
  }
}




