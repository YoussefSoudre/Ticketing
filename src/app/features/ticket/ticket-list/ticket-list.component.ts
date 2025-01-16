import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AjouterComponent } from '../ajouter/ajouter.component';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent {
  constructor(private router: Router, public dialog: MatDialog) { }
  

  openDialog() {
    this.dialog.open(AjouterComponent, {
      minWidth: '80%',
      // overflowY: "scroll",
      data: {
        message: 'paulboss100%',
      },
    });
  }


}

// @Component({
//   selector: 'app-ajouter',
//   templateUrl: './ajouter.component',
//   styleUrls: ['./ajouter.component.css']
// })
// export class AjouterComponent {
//   constructor(@Inject(DIALOG_DATA) public data: DialogData) {}
// }
