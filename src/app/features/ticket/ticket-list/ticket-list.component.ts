import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AjouterComponent } from '../ajouter/ajouter.component';
import { Dialog } from 'primeng/dialog';
import { DialogService } from 'primeng/dynamicdialog';
import { TicketService } from 'src/app/shared/services/clientDasboardServices/ticketService/ticket.service';


import { Table } from 'primeng/table';
import { Ticket } from 'src/app/shared/models/clientDasboardModels/ticketModel/ticket.model';
import { Customer, Representative } from 'src/app/shared/models/clientDasboardModels/ticketModel/ticket.model';
import { ProgressBar } from 'primeng/progressbar';


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit{
  customers!: Customer[];

  representatives!: Representative[];

  statuses!: any[];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  searchValue: string | undefined;






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

    this.ticketService.getticket().subscribe(data => {
    });

    this.representatives = [
        { name: 'Amy Elsner', image: 'amyelsner.png' },
        { name: 'Anna Fali', image: 'annafali.png' },
        { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
        { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
        { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
        { name: 'Onyama Limba', image: 'onyamalimba.png' },
        { name: 'Stephen Shaw', image: 'stephenshaw.png' },
        { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
    ];

    this.statuses = [
        { label: 'Unqualified', value: 'unqualified' },
        { label: 'Qualified', value: 'qualified' },
        { label: 'New', value: 'new' },
        { label: 'Negotiation', value: 'negotiation' },
        { label: 'Renewal', value: 'renewal' },
        { label: 'Proposal', value: 'proposal' }
    ];
  }

  clear(table: Table) {
    table.clear();
    this.searchValue = ''
  }

  getSeverity(status: string) : string{
    switch (status.toLowerCase()) {
        case 'unqualified':
            return 'danger';

        case 'qualified':
            return 'success';

        case 'new':
            return 'info';

        case 'negotiation':
            return 'warning';

        // case 'renewal':
        //     return null;
        default:
          return 'info';
    }

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

}


}
