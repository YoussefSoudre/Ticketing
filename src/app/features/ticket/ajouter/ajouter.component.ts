import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators  } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent {
  formulaire!: FormGroup;

  constructor(
    
    private fb: FormBuilder
  ) {
    this.formulaire = this.fb.group({
      statut: ['', Validators.required],
      priorite: ['', Validators.required],
      titre: ['', [Validators.required, Validators.minLength(3)]],
      client: ['', Validators.required],
      debut: ['', Validators.required],
      fin: ['', Validators.required],
      reponse: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  

  onSubmit(): void {
    if (this.formulaire.valid) {
      console.log('Formulaire soumis:', this.formulaire.value);
    } else {
      console.error('Le formulaire est invalide');
    }
  }

  // Exemple de données pour les sélections dans le formulaire
  statutOptions = ['En cours', 'Terminé', 'En attente'];
  prioriteOptions = ['Basse', 'Moyenne', 'Haute'];
  clientOptions = ['Client A', 'Client B', 'Client C'];

}
