import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  formData: Record<string, string> = {
    name: '',
    email: '',
    message: ''
  };

  privacyAccepted: boolean = false;
  errors: Record<string, string> = {};
  showOverlay: boolean = true;

  contactTexts = {
    title: 'Contact Me',
    subtitle: "Let's work together",
    question: 'Got a problem to solve?',
    description: 'Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.',
    cta: "Need a Frontend developer?"
  };

  formFields = [
    { label: "What's your name?", type: 'text', placeholder: 'Your name goes here', model: 'name' },
    { label: "What's your email?", type: 'email', placeholder: 'youremail@email.com', model: 'email' },
    { label: 'How can I help you?', type: 'textarea', placeholder: 'Hello Tarik, I am interested in...', model: 'message' }
  ] as const;

  validateField(field: string) {
    if (field === 'email') {
      if (!this.formData[field]) {
        this.errors[field] = 'Hoppla! your email is required';
      } else if (!this.isValidEmail(this.formData[field])) {
        this.errors[field] = 'Please enter a valid email';
      } else {
        this.errors[field] = '';
      }
    } else {
      if (!this.formData[field]) {
        switch (field) {
          case 'name':
            this.errors[field] = 'Oops it seems your name is missing';
            break;
          case 'message':
            this.errors[field] = 'What do you need to develop?';
            break;
          default:
            this.errors[field] = 'This field is required';
        }
      } else {
        this.errors[field] = '';
      }
    }
  }

  isFormValid(): boolean {
    if (!this.privacyAccepted) {
      return false;
    }
  
    for (const field of this.formFields) {
      const value = this.formData[field.model];
      if (!value) {
        return false;
      }
      if (field.model === 'email' && !this.isValidEmail(value)) {
        return false;
      }
    }
    
    return true;
  }
  
  clearEmailError(field: string) {
    if (field === 'email' && this.formData[field]) {
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

    this.showOverlay = true;
    
  
    this.formData = { name: '', email: '', message: '' };
    this.privacyAccepted = false;
  }

  closeOverlay() {
    this.showOverlay = false;
  }
}
