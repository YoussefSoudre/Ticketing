import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  startDate: Date | null = null;
  endDate: Date | null = null;

  // Définir les raccourcis
  setShortcut(days: number) {
    const today = new Date();
    this.startDate = new Date(today.setDate(today.getDate() - days));
    this.endDate = new Date();
  }

  // Action de filtrage
  filterByDate() {
    console.log('Filtrer par:', this.startDate, this.endDate);
    // Ajoutez ici votre logique de filtrage
  }

}
