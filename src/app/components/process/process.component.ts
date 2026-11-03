import { Component } from '@angular/core';
@Component({ selector: 'app-process', standalone: true, templateUrl: './process.component.html', styleUrl: './process.component.scss' })
export class ProcessComponent {
  steps = [
    { n: '01', title: 'Ascoltiamo', desc: 'Analizziamo la tua attività, gli obiettivi e ciò di cui hai davvero bisogno.' },
    { n: '02', title: 'Progettiamo', desc: 'Prepariamo una prima direzione visuale e un mockup da valutare insieme.' },
    { n: '03', title: 'Sviluppiamo', desc: 'Dopo l’approvazione trasformiamo il concept in un prodotto digitale funzionante.' },
    { n: '04', title: 'Rifiniamo', desc: 'Test, contenuti, ottimizzazioni e revisioni concordate prima del lancio.' },
    { n: '05', title: 'Lanciamo', desc: 'Pubblicazione online, consegna e supporto per i passaggi successivi.' }
  ];
}
