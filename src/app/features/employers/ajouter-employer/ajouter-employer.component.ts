import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/clientDasboardServices/employeeService/employee.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajouter-employer',
  templateUrl: './ajouter-employer.component.html',
  styleUrls: ['./ajouter-employer.component.css']
})
export class AjouterEmployerComponent {
  employeeForm: FormGroup;


  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.employeeForm = this.fb.group({
      id: [this.generateId(), Validators.required],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
    });
  }
  ngOnInit(): void { }

  onSubmit() {
    if (this.employeeForm.valid) {
      const { value: newEmployee } = this.employeeForm;
      console.log('Employee Created:', newEmployee);
    
      this.employeeService.addEmployee(newEmployee);
      this.employeeForm.reset();
    } else {
      console.log('Form Invalid');
    }
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 15); // Génère un identifiant unique
  }

}

 