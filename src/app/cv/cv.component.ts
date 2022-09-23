import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {

 
listaIdiomas:any[]=[];
listaTecnologias:any []=[];
listaSoftSkils:any[]=[];
listaProgramacion:any[]=[];
listaAntropologia:any[]=[];
listaOtras:any[]=[];
listaTrabajoProgramacion:any[]=[];
listaTrabajoDocencia:any[]=[];
listaTrabajoOtros:any[]=[];

  constructor(private _datosPortfolio:PortfolioService) { }

  

  ngOnInit(): void {
    this._datosPortfolio.obtenerDatos().subscribe(data=>{
      this.listaIdiomas=data.educacion.idiomas;
      this.listaTecnologias=data.educacion.tecnologias;
      this.listaSoftSkils=data.educacion.softSkils;
      this.listaProgramacion=data.educacion.programacion;
      this.listaAntropologia=data.educacion.antropologia;
      this.listaOtras=data.educacion.otras;
      this.listaTrabajoProgramacion=data.experiencia.programacion;
      this.listaTrabajoDocencia=data.experiencia.docencia;
      this.listaTrabajoOtros=data.experiencia.otros;

    })
    }
}
