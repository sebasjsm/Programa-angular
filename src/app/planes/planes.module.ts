import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProgramasComponent } from './list-programas/list-programas.component';
import { DetailPlanComponent } from './detail-plan/detail-plan.component';
import {BrowserModule} from "@angular/platform-browser";
import {ProgramasModule} from "../programas/programas.module";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ListProgramasComponent,
    DetailPlanComponent
  ],
  imports: [
    BrowserModule,
    ProgramasModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class AutosModule { }
