import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.css']
})
export class AjouterClientComponent {
  clientForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.clientForm = this.fb.group({
      id: [this.generateId(), Validators.required],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
    adresse: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      satuts: ['', [Validators.required, Validators.email]],
      subscriptionPlan: ['', Validators.required],
    });
  }
  ngOnInit(): void { }

  onSubmit() {
    if (this.clientForm.valid) {
      const { value: newEmployee } = this.clientForm.value;
      console.log('Employee Created:', newEmployee);
  
    } else {
      console.log('Form Invalid');
    }
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 15); // Génère un identifiant unique
  }


}
