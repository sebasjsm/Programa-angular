import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Programa} from "../model/Programa";
import {ProgramaService} from "../service/programa.service";

@Component({
  selector: 'app-create-programa',
  templateUrl: './create-programa.component.html',
  styleUrls: ['./create-programa.component.css']
})

export class CreateProgramaComponent implements OnInit {

  public programaForm!: FormGroup; // FormGroup es un conjunto de FormControl que se pueden agrupar en un formulario

  // FormBuilder es una clase que nos permite crear formularios de manera más sencilla
  constructor(private formBuilder: FormBuilder, private programaService: ProgramaService) {  // Inyectamos el servicio ProgramaService
  }

  ngOnInit(): void {
    this.programaForm = this.formBuilder.group({ // Creamos el formulario con los campos que queremos que tenga
      nombre:["",[Validators.required, Validators.minLength(3)]] // El campo nombre es obligatorio y debe tener al menos 3 caracteres
    });
  }

  createPrograma(programa: Programa) { // Creamos un programa con el formulario que hemos creado y lo guardamos en la base de datos
    // El metodo save del servicio ProgramaService devuelve un Observable que nos permite suscribirnos a el y obtener la respuesta del servidor o un error
    this.programaService.save(programa).subscribe(
      response => { // Si la respuesta es correcta mostramos un mensaje de exito
        console.log(response);
        alert(`Programa ${programa.nombre} creado con exito`);
      } , error => { // Si la respuesta es incorrecta mostramos un mensaje de error
        console.log(error);
        alert(`Error al crear el programa ${programa.nombre}`);
      }
    );
  }

  // Este metodo se ejecuta cuando se pulsa el boton de cancelar y resetea el formulario
  cancelCreation(){
    this.programaForm.reset();
  }

}
