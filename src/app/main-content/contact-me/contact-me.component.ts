import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  formData: Record<string, string> = {
    name: '',
    email: '',
    message: ''
  };

  privacyAccepted: boolean = false;
  errors: Record<string, string> = {};

  contactTexts = {
    title: 'Contact Me',
    subtitle: "Let's work together",
    question: 'Got a problem to solve?',
    description: 'Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.',
    cta: "Need a Frontend developer?"
  };

  formFields = [
    { label: "What's your name?", type: 'text', placeholder: 'Your name goes here', model: 'name' },
    { label: "What's your email?", type: 'email', placeholder: 'your@email.com', model: 'email' },
    { label: 'How can I help you?', type: 'textarea', placeholder: 'Hello Tarik, I am interested in...', model: 'message' }
  ] as const;

  validateField(field: string) {
    if (!this.formData[field]) {
      this.errors[field] = 'This field is required';
    } else if (field === 'email' && !this.isValidEmail(this.formData[field])) {
      this.errors[field] = 'Please enter a valid email';
    } else {
      this.errors[field] = '';
    }
  }

  isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  sendMessage() {
    for (const field of this.formFields) {
      if (!this.formData[field.model]) {
        alert(`Please fill out the field: ${field.label}`);
        return;
      }
    }

    if (!this.privacyAccepted) {
      alert('Please accept the privacy policy.');
      return;
    }

    console.log('Message sent:', this.formData);
  }
}
