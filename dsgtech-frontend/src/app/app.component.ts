// src/app/app.component.ts
import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  // 👇 Importamos RouterOutlet para poder usar <router-outlet> en standalone
  imports: [CommonModule, RouterOutlet, ContactComponent],
})
export class AppComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;
  currentYear: number = new Date().getFullYear();

  // 👇 Nueva bandera: controla si estamos en una página legal
  isLegalPage = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Marcar estado al iniciar (por si cargan directo /politicas-de-privacidad)
    this.setLegalFlag(this.router.url);

    // Actualizar bandera al navegar
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.setLegalFlag(ev.urlAfterRedirects);
      }
    });
  }

  // ✅ Detecta si la URL actual es una ruta legal
  private setLegalFlag(url: string) {
    this.isLegalPage =
      url.startsWith('/politicas-de-privacidad') ||
      url.startsWith('/terminos-condiciones');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = this.document.documentElement.scrollTop > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollToAndClose(sectionId: string) {
    this.document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    this.isMobileMenuOpen = false;
  }
}

