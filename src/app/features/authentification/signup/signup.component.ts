import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
formulaire: FormGroup;

  constructor(private fb: FormBuilder) {
   

    // Création du formulaire avec le validateur personnalisé
    this.formulaire = new FormGroup(
      {
        name: new FormControl( [Validators.required]),
        email: new FormControl( [Validators.required, Validators.email]),
        password: new FormControl( [Validators.required, Validators.minLength(8)]),
        confirmPassword: new FormControl( [Validators.required])
      },
  
     
    );
  }

  // Validateur personnalisé pour vérifier la correspondance des mots de passe


  // Gestion de la soumission du formulaire
  onSubmit() {
    if (this.formulaire.valid) {
      console.log('Formulaire soumis avec succès :', this.formulaire.value);
    } else {
      console.log('Le formulaire est invalide');
    }
  }
 
}
