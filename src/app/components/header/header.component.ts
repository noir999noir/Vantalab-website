import { Component, HostListener, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnDestroy {

  menuOpen = false;
  scrolled = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 30;
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 850) {
      this.closeMenu();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;

    this.updateBodyScroll();
  }

  closeMenu(): void {
    this.menuOpen = false;

    this.updateBodyScroll();
  }

  private updateBodyScroll(): void {
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }

}