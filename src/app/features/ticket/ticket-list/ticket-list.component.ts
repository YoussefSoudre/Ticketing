import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AjouterComponent } from '../ajouter/ajouter.component';
import { Dialog } from 'primeng/dialog';
import { DialogService } from 'primeng/dynamicdialog';
import { TicketService } from 'src/app/shared/services/clientDasboardServices/ticketService/ticket.service';


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit{

  ///////////////////////////////////////::DECLARATIONS:://///////////////////////////////////////
  ajouterDialog: boolean= false;
  modifierDialog: boolean=false;

  ajouterDialogVisible: boolean = false;
  modifierDialogVisible: boolean = false;
  visible: boolean = false;

  header: string='Dialog';
  position: string = 'center';

  ticketsList: any =[]; //Variable pour recuperer la liste des tickets depuis le service TicketService

  constructor(private router: Router, 
              public dialog: MatDialog, 
              private dialogService: DialogService,
              private ticketService: TicketService) { }

  ngOnInit(): void {
    this.getTicketsListe();
  }

  

////////////////////////////////::FONCTIONS::///////////////////////////////

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

  getTicketsListe() { //recuperation de la liste des tickets
    this.ticketsList = this.ticketService.getTicketsListe();
    
    console.log('la liste des tickets: ', this.ticketsList);
}


}
