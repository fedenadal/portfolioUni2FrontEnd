import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';



@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  URL= 'http://localhost:8080/personas/';

  constructor(private http: HttpClient) {
  }

  public getPersona():Observable<Persona>{
    return this.http.get<Persona>(this.URL+'traer/perfil');
  }

  

  obtenerDatos(): Observable<any> {
    return this.http.get('./assets/data/data.json');
  }

}
