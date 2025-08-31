import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-politicas-de-privacidad',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './politicas-de-privacidad.component.html',
  styleUrl: './politicas-de-privacidad.component.css'
})
export class PoliticasDePrivacidadComponent {
  // Agrega esta línea para declarar la variable del correo electrónico
  email: string = 'contacto@dsgtech.com';
}
