import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({ selector: 'app-contact', standalone: true, imports: [FormsModule], templateUrl: './contact.component.html', styleUrl: './contact.component.scss' })
export class ContactComponent {
  form = { name: '', email: '', service: 'Sito web / Web app', message: '' };
  sendEmail() {
    const subject = encodeURIComponent(`Nuova richiesta VANTALAB — ${this.form.name}`);
    const body = encodeURIComponent(`Nome: ${this.form.name}\nEmail: ${this.form.email}\nServizio: ${this.form.service}\n\nProgetto:\n${this.form.message}`);
    window.location.href = `mailto:gruppovanta@gmail.com?subject=${subject}&body=${body}`;
  }
}
