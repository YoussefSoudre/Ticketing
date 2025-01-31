import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientServiceService } from 'src/app/shared/services/clientDasboardServices/clientService/client-service.service';

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.css']
})
export class AjouterClientComponent {
  clientForm: FormGroup;


  constructor(private fb: FormBuilder,private clientService: ClientServiceService ) {
    this.clientForm = this.fb.group({
      id: [this.generateId(), Validators.required],
     name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      adresse: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      status: ['', [Validators.required,]],
      subscriptionPlan: ['', Validators.required],
      employee: { type: Array, default: [] } 

    
    });
  }
  ngOnInit(): void { }

  onSubmit() {
    if (this.clientForm.valid) {
      const { value: newClient} = this.clientForm;
      console.log('client Created:', newClient);

      this.clientService.addClient(newClient);
      this.clientForm.reset();
    } else {
      console.log('Form Invalid');
    }
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 15); // Génère un identifiant unique
  }


}
