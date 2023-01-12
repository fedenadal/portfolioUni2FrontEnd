import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
persURL='portfoliobackend-production-1b35.up.railway.app/personas/'
  constructor(private httpClient: HttpClient) { }
 
  public lista():Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.persURL + 'lista')
  }
  
  public detail (id : number): Observable<Persona>{
    return this.httpClient.get<Persona>(this.persURL + `detail/${id}`); //comillas a la izq con alt 96  
  }
  
  public save(persona:Persona):Observable<any>{
  
    return this.httpClient.post<any>(this.persURL +'create', persona);
  }
  
  public update (id:number, persona:Persona):Observable<any>{
    return this.httpClient.put<any>(this.persURL+`update/${id}`, persona );
  }
  
  public delete (id:number) : Observable<any>{
  return this.httpClient.delete<any>(this.persURL + `delete/${id}`);
  }
  
  }
  
  


