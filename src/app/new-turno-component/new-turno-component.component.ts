import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-turno-component',
  templateUrl: './new-turno-component.component.html',
  styleUrls: ['./new-turno-component.component.css'],
  providers: [DatePipe]
})
export class NewTurnoComponentComponent implements OnInit {
  constructor(public datepipe: DatePipe) {}

  ngOnInit(): void {
  
  }

  onNewTurno(form:NgForm){
    const value = form.value;
    let turno: object;
    let turnosLocalStorage = localStorage.getItem('turnos');
    let turnos = turnosLocalStorage ? JSON.parse(turnosLocalStorage) : [];
    turno = {id:1,name:value.name, email:value.email, dateTurno:this.datepipe.transform(new Date(value.dateTurno), 'yyyy/MM/dd HH:mm'), sucursal:value.subsidiary, description:value.descriptionTurno} 
    turnos.push(turno);
    localStorage.setItem("turnos", JSON.stringify(turnos));
  }

}
