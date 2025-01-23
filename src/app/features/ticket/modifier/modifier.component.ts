import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators  } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent {

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
