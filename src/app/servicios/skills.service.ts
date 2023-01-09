import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skillsURL ='http://localhost:8080/skills/'
  constructor(private httpClient: HttpClient) { }

  public lista():Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.skillsURL + 'lista')
  }
  
  public detail (id : number): Observable<Skills>{
    return this.httpClient.get<Skills>(this.skillsURL + `detail/${id}`); //comillas a la izq con alt 96  
  }
  
  public save(skills:Skills):Observable<any>{
  
    return this.httpClient.post<any>(this.skillsURL +'create', skills);
  }
  
  public update (id:number,skills:Skills):Observable<any>{
    return this.httpClient.put<any>(this.skillsURL+`update/${id}`, skills );
  }
  
  public delete (id:number) : Observable<any>{
  return this.httpClient.delete<any>(this.skillsURL + `delete/${id}`);
  }
  
}
