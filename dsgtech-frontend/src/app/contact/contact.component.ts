import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,                  // 👈 importante
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


  enviarContacto() {
    // acá va tu lógica real de envío (servicio, API, etc.)
    // Ejemplo simulado:
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.successMsg = '¡Gracias! Te responderemos pronto.';
      this.showSuccess = true;
      this.showError = false;
      setTimeout(() => this.showSuccess = false, 5000);
      this.formData = { name: '', email: '', message: '' };
    } else {
      this.errorMsg = 'Completa todos los campos.';
      this.showError = true;
      this.showSuccess = false;
      setTimeout(() => this.showError = false, 5000);
    }
  }
}




