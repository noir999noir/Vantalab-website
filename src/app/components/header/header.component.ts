import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = false;
  scrolled = false;
  @HostListener('window:scroll') onScroll() { this.scrolled = window.scrollY > 30; }
  toggleMenu() { this.menuOpen = !this.menuOpen; document.body.style.overflow = this.menuOpen ? 'hidden' : ''; }
  closeMenu() { this.menuOpen = false; document.body.style.overflow = ''; }
}
