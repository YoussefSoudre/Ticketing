import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  formulaire: FormGroup;

  constructor(private fb: FormBuilder) {


    this.formulaire = new FormGroup(
      {
        name: new FormControl('',[Validators.required,Validators.minLength(3)]),
        email: new FormControl('',[Validators.required, Validators.email]),
        phone: new FormControl('', [Validators.required, Validators.minLength(8)]),
        password: new FormControl('',[Validators.required, Validators.minLength(8)]),
        confirmPassword: new FormControl('',[Validators.required])
      },


    );
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }




  onSubmit() {
    if (this.formulaire.valid) {
      console.log('Formulaire soumis avec succès :', this.formulaire.value);
    } else {
      console.log('Le formulaire est invalide');
    }
  }

}
