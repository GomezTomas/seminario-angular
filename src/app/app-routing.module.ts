import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';


const routes : Routes = [
  {
    path: "",
    redirectTo: "jugadores",
    pathMatch: "full"
  },
  {
    path: "jugadores",
    component: PlayersComponent
  },
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
