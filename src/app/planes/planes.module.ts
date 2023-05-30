import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProgramasComponent } from './list-programas/list-programas.component';
import { DetailPlanComponent } from './detail-plan/detail-plan.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ListProgramasComponent,
    DetailPlanComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[

  ]
})
export class PlanesModule { }
