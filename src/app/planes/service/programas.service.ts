import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Programa} from "../model/programa";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProgramasService {
  private baseUrl: string = "http://localhost:8081/programa-service/programas";

    constructor(private httpClient: HttpClient) { }

    //Observable es parte de la interfaz reactiva de javascript (rxjs)
    getProgramas(): Observable<Programa[]>{
        return this.httpClient.get<Programa[]>(this.baseUrl);
    }
}
