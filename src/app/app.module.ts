import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {ProgramasService} from "./planes/service/programas.service";
import {PlanesModule} from "./planes/planes.module";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {ProgramasModule} from "./programas/programas.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    PlanesModule,
    ProgramasModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ProgramasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
