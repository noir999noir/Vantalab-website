import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects = [
    {
      number: '01',
      type: 'REAL ESTATE / DIGITAL EXPERIENCE',
      title: 'Altiora',
      category: 'Real Estate',
      url: 'https://altiora-ten.vercel.app/',
      cls: 'project-one',
      description: 'Una presenza digitale elegante per il mondo immobiliare.'
    },
    {
      number: '02',
      type: 'RETAIL / CORPORATE WEBSITE',
      title: 'Ferramenta Galletto',
      category: 'Retail',
      url: 'https://ferramenta-galletto.vercel.app/',
      cls: 'project-two',
      description: 'Un sito pensato per valorizzare prodotti e attività.'
    },
    {
      number: '03',
      type: 'SPORT / BRAND EXPERIENCE',
      title: 'Beasts Brothers',
      category: 'Sport & Lifestyle',
      url: 'https://beastsbrothers.com/',
      cls: 'project-three',
      description: 'Identità digitale energica, costruita intorno al brand.'
    },
    {
      number: '04',
      type: 'AUTOMOTIVE / WEB DESIGN',
      title: 'BS Motors',
      category: 'Automotive',
      url: 'https://bs-motors-nu.vercel.app/',
      cls: 'project-four',
      description: 'Un’esperienza digitale dedicata al mondo delle auto.'
    },
    {
      number: '05',
      type: 'CORPORATE / WEB DEVELOPMENT',
      title: 'Guri Group',
      category: 'Corporate',
      url: 'https://gurigroup.eu/',
      cls: 'project-five',
      description: 'Una presenza web per raccontare servizi e attività del gruppo.'
    }
  ];
}