import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-option-home-component',
  templateUrl: './option-home-component.component.html',
  styleUrls: ['./option-home-component.component.css']
})
export class OptionHomeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newTurno(){
    console.log("nuevo turno")
  }

  searchTurno(){
    console.log("buscar turno")
  }

}
