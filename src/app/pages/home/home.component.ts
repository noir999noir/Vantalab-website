import { Component, AfterViewInit, OnDestroy } from '@angular/core';

import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesComponent } from '../../components/services/services.component';
import { VantaShowcaseComponent } from '../../components/vanta-showcase/vanta-showcase.component';
import { PortfolioComponent } from '../../components/portfolio/portfolio.component';
import { ProcessComponent } from '../../components/process/process.component';
import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    VantaShowcaseComponent,
    PortfolioComponent,
    ProcessComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-header />

    <main>
      <app-hero />
      <app-services />
      <app-vanta-showcase />
      <app-portfolio />
      <app-process />
      <app-about />
      <app-contact />
    </main>

    <app-footer />
  `
})
export class HomeComponent implements AfterViewInit, OnDestroy {

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {

    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {

          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer?.unobserve(entry.target);
          }

        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach(element => {
      this.observer?.observe(element);
    });

  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

}