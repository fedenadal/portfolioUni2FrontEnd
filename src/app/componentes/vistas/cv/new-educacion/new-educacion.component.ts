import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreEd: string = '';
  descripcionEd: string ='';
  areaEd: string='';


  constructor(private educacionService:EducacionService, private router : Router) { }

  ngOnInit(): void {
  }


  onCreate(): void{
    const educ = new Educacion (this.nombreEd, this.descripcionEd ,this.areaEd);
    this.educacionService.save(educ).subscribe({
      next: data=>{
        alert ("Curso añadido");
        this.router.navigate(['']);
      },
       error: err=>{
        alert("Falló la carga");
        this.router.navigate(['']);
      }
    }
    )
  }
}
