import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/clientDasboardServices/employeeService/employee.service';

@Component({
  selector: 'app-employer-liste',
  templateUrl: './employer-liste.component.html',
  styleUrls: ['./employer-liste.component.css']
})
export class EmployerListeComponent implements OnInit {

  ajouterDialog: boolean= false;
  modifierDialog: boolean=false;

  ajouterDialogVisible: boolean = false;
  modifierDialogVisible: boolean = false;
  visible: boolean = false;

  header: string='Dialog';
  position: string = 'center';

  employerList: any = [];
  constructor(private employeservice: EmployeeService){

  }

  ngOnInit(): void {
    this.getEmployers();
  }

  getEmployers(){
    this.employeservice.getEmployees().subscribe(data => {
      this.employerList = data;
      console.log('donnees des employés :', data);
    });
  }

  showAjouterDialog(position: string) { //Afficher le formulaire ajouter un ticket
    this.position = position;
    this.ajouterDialogVisible = true;
    this.visible = true;

    this.ajouterDialog = true;
    this.modifierDialog = false;

    this.header="Ajouter un ticket";
    
}

showModifierDialog(position: string) { //Afficher le formulaire modifier un ticket
  this.position = position;
  this.modifierDialogVisible = true;
  this.visible = true;

  this.modifierDialog = true;
  this.ajouterDialog = false;
  this.header="Modifier un ticket";
  
}
}
