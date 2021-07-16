import { Component } from '@angular/core';
import { TurnoElement } from './list-turnos-component/list-turnos-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TurnosOnline';
  turnos: TurnoElement[] = [];

  constructor() {
    localStorage.setItem('turnos', JSON.stringify(this.turnos));
  }

}
