import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListProgramasComponent} from "./planes/list-programas/list-programas.component";
import {CreateProgramaComponent} from "./programas/create-programa/create-programa.component";

const routes: Routes = [
  {
    path: '',
    component: CreateProgramaComponent,
  },
  {
    path: 'programas',
    component: ListProgramasComponent
  }
]

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
