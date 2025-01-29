import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TicketService } from 'src/app/shared/services/clientDasboardServices/ticketService/ticket.service';


@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent {
  formulaire!: FormGroup;

  constructor(private fb: FormBuilder,private TicketService: TicketService) {
    this.formulaire = this.fb.group({
      id: [this.generateId(), Validators.required],
      titre: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      priority: ['', Validators.required],
      status: ['', Validators.required],
      createdDate: ['', Validators.required],
      updateDate: ['', Validators.required],
      completionDate: ['', Validators.required],

    });
  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.formulaire.valid) {
      const { value: newTicket } = this.formulaire;
      console.log('ticket:', newTicket);

      this.TicketService.addEmployee(newTicket);
      this.formulaire.reset();
    } else {
      console.log('Form Invalid');
    }
  }

  // Exemple de données pour les sélections dans le formulaire
  statutOptions = ['En cours', 'Terminé', 'En attente'];
  priorityOptions = ['Basse', 'Moyenne', 'Haute'];
  clientOptions = ['employer A', 'employer B', 'employer C'];
  // employeeOption creation


  private generateId(): string {
    return Math.random().toString(36).substring(2, 15); // Génère un identifiant unique
  }

}
