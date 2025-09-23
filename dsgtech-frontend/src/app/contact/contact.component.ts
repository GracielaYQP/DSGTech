import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,                  
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = { name: '', email: '', message: '' };
  showSuccess = false;
  showError = false;
  successMsg = '';
  errorMsg = '';

  constructor(private http: HttpClient) {}


  enviarContacto() {
    const { name, email, message } = this.formData;
    this.showError = this.showSuccess = false;

    this.http.post('/api/contact', { name, email, message })  // ajustá baseUrl
      .subscribe({
        next: () => {
          this.successMsg = '¡Gracias! Te responderemos pronto.';
          this.showSuccess = true;
          this.formData = { name: '', email: '', message: '' };
          setTimeout(() => this.showSuccess = false, 5000);
        },
        error: (err) => {
          console.error(err);
          this.errorMsg = 'No se pudo enviar. Intenta de nuevo.';
          this.showError = true;
          setTimeout(() => this.showError = false, 5000);
        }
      });
  }
}




