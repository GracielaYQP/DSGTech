// src/app/app.component.ts
import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { CommonModule, DOCUMENT, NgOptimizedImage } from '@angular/common';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContactComponent, NgOptimizedImage],
})
export class AppComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;
  currentYear: number = new Date().getFullYear();

  isLegalPage = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.setLegalFlag(this.router.url);
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.setLegalFlag(ev.urlAfterRedirects);
      }
    });
  }

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

  videoModal = { open: false, src: '' };

  openVideo(src: string) {
    this.videoModal.open = true;
    this.videoModal.src = src.startsWith('/') ? src : '/' + src;
  }

  closeVideo() {
    this.videoModal.open = false;
    this.videoModal.src = '';
  }

}

