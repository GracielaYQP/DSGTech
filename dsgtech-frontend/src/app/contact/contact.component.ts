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

  enviarContacto() {
    alert(`Gracias ${this.formData.name}, recibimos tu mensaje ✅`);
    this.formData = { name: '', email: '', message: '' };
  }
}




