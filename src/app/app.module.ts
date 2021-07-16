import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent}  from './header/header.component'
import { FooterComponent } from './footer/footer.component';
import { ListTurnosComponentComponent } from './list-turnos-component/list-turnos-component.component';
import {NewTurnoComponentComponent} from './new-turno-component/new-turno-component.component'
import { AppRoutingModule } from './app-routing.module';
import { OptionHomeComponentComponent } from './option-home-component/option-home-component.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatNativeDateModule, MatPseudoCheckboxModule } from '@angular/material/core';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';

import {
  NgxMatDatetimePickerModule, 
  NgxMatNativeDateModule, 
  NgxMatTimepickerModule 
} from '@angular-material-components/datetime-picker';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListTurnosComponentComponent,
    NewTurnoComponentComponent,
    OptionHomeComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    NgxMatMomentModule,
   // MatMomentDateModule,
   HttpClientModule,
   MatInputModule,
   FormsModule,
   ReactiveFormsModule,
   MatButtonModule,
   MatRadioModule,
   MatSelectModule,
   MatPseudoCheckboxModule,
   MatTableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
