import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  nombreE: string = '';
  descripcionE: string ='';
  areaE: string='';


  constructor(private experienciaService:ExperienciaService, private router : Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Experiencia (this.nombreE, this.descripcionE ,this.areaE);
    this.experienciaService.save(expe).subscribe({
      next: data=>{
        alert ("Experiencia añadida");
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
