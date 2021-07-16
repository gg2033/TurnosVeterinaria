import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListTurnosComponentComponent } from "./list-turnos-component/list-turnos-component.component";
import { NewTurnoComponentComponent } from "./new-turno-component/new-turno-component.component";
import { OptionHomeComponentComponent } from "./option-home-component/option-home-component.component";

const appRoutes : Routes = [
    {path:'', redirectTo:'/home', pathMatch: 'full'},
    {path: 'home', component: OptionHomeComponentComponent},
    {path: 'newTurno', component: NewTurnoComponentComponent},
    {path: 'searchTurno', component: ListTurnosComponentComponent}
    
]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}