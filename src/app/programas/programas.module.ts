import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProgramaComponent } from './create-programa/create-programa.component';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    CreateProgramaComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ProgramasModule { }
