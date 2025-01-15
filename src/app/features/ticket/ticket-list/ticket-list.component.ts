import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent {
  constructor(private router: Router) { }
  navigateToOtherPage(): void {
    this.router.navigate(['/ajouter']);
  }

}
