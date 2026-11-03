import { Component } from '@angular/core';
@Component({ selector: 'app-services', standalone: true, templateUrl: './services.component.html', styleUrl: './services.component.scss' })
export class ServicesComponent {
  services = [
    { n: '01', icon: '↗', title: 'Websites & Web App', desc: 'Siti aziendali, landing page, e-commerce e applicazioni web progettate su misura.', tag: 'DESIGN + DEVELOPMENT' },
    { n: '02', icon: '✳', title: 'VANTA AI', desc: 'La nostra piattaforma proprietaria per generare immagini, visual e mockup.', tag: 'AI PRODUCT' },
    { n: '03', icon: 'G', title: 'Google Business', desc: 'Configurazione e ottimizzazione della presenza della tua azienda su Google.', tag: 'DIGITAL PRESENCE' },
    { n: '04', icon: '⌕', title: 'SEO & Optimization', desc: 'Miglioriamo struttura, velocità, visibilità e user experience del tuo sito.', tag: 'GROWTH + PERFORMANCE' },
    { n: '05', icon: 'ϟ', title: 'Rapid Web Launch', desc: 'Un primo concept in circa un giorno lavorativo e siti pronti in 1–3 giorni, secondo il progetto.', tag: 'FAST DELIVERY' },
    { n: '06', icon: '◇', title: 'Mockup & UX/UI', desc: 'Diamo forma alle tue idee con prototipi e interfacce prima dello sviluppo.', tag: 'VISUAL CONCEPT' }
  ];
}
