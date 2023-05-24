import {Injectable} from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {Programa} from "../model/Programa";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProgramaService {
  //Se define la url del servicio REST
  private urlEndPoint: string = 'http://localhost:8081/programa-service/programas';

  //Metodo para crear un programa con HttpClient por el metodo POST
  save(programa: any): Observable<Programa> { //Se retorna un objeto observable que espera a que este disponible el objeto Programa
    return this.httpClient.post<Programa>(this.urlEndPoint, programa).pipe( //Se realiza la peticion POST al servicio REST
      catchError(() => throwError(() => new Error('Error al crear el programa'))) //Se captura el error en caso de que exista
    );
  }

  //Se inyecta el servicio HttpClient en el constructor
  constructor(private httpClient: HttpClient) { }
}
