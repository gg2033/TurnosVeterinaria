import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface TurnoElement {
   id: number, 
   name: string, 
   email: string, 
   sucursal:string, 
   dateTurno: Date, 
   description:String 
}

@Component({
  selector: 'app-list-turnos-component',
  templateUrl: './list-turnos-component.component.html',
  styleUrls: ['./list-turnos-component.component.css']
})
export class ListTurnosComponentComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'sucursal', 'dateTurno', 'description'];
  /* public dataSource: TurnoElement[] = []; */
  turnosLocalStorage = localStorage.getItem('turnos');
  dataSource = this.turnosLocalStorage?JSON.parse(this.turnosLocalStorage):[];
 

  constructor() {
    
   }

  ngOnInit(): void {
    
    
  }

}
