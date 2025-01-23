import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }
  liste=[
    {
      id: '1',
      priorite: 'Haute',
      titre: 'Réparation de la carte mere du HP Celeron',
      client: 'GUIGMA W.Paulin',
      dateDebut: '11/11/2024',
      DateFin: '13/11/2024',
      reponse: 'Terminé',
    }
  ]

  getTicketsListe(){
    return this.liste;
  }
}
