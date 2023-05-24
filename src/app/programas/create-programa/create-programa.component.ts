import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-programa',
  templateUrl: './create-programa.component.html',
  styleUrls: ['./create-programa.component.css']
})

export class CreateProgramaComponent implements OnInit {

  public programaForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }
  /*
  * const form = new FormGroup({
    first: new FormControl('Nancy', Validators.minLength(2)),
    last: new FormControl('Drew'),
  });

  * */
  ngOnInit(): void {
    this.programaForm = this.formBuilder.group({
      nombre:["",[Validators.required, Validators.minLength(3)]]
    });
  }

  createPrograma(value: any) {
    return false;

  }

}
