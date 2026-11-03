import { Component, AfterViewInit, ElementRef, inject } from '@angular/core';
import { gsap } from 'gsap';

@Component({ selector: 'app-hero', standalone: true, templateUrl: './hero.component.html', styleUrl: './hero.component.scss' })
export class HeroComponent implements AfterViewInit {
  private el = inject(ElementRef);
  ngAfterViewInit() {
    const root = this.el.nativeElement;
    gsap.from(root.querySelectorAll('.hero-kicker, .hero-title, .hero-copy, .hero-actions, .hero-meta'), { y: 28, opacity: 0, duration: .9, stagger: .12, ease: 'power3.out', delay: .15 });
  }
}
