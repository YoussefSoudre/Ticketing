import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/shared/models/globaleModel';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url='http://localhost:3000/employee';
  constructor(private http: HttpClient) { }
  getemployee() {
    return this.http.get(this.url);
  }

  addEmployee(value: Employee): void {
    let val = value;
    let body = {
      firstName: value.firstName,
      lastName: value.lastName,
      phone: value.phone,
     email: value.email,
      role: value.role,
    
    }

    console.log('submit value since the service :', body);
    this.http.post(this.url, body).subscribe((res) => {
      console.log('res dans services', res)
    });
  }
  
  getEmployees() {
  
  }

}
