import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { PortfolioService } from '../../../servicios/portfolio.service';
import { Experiencia } from 'src/app/model/experiencia';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { SkillsService } from 'src/app/servicios/skills.service';
import { Skills } from 'src/app/model/skills';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {

  skill:Skills[];
  expe: Experiencia[] = [];
  educ: Educacion[] = [];
  listaIdiomas: any[] = [];
  listaTecnologias: any[] = [];
  listaSoftSkills: any[] = [];
  listaProgramacion: any[] = [];
  listaAntropologia: any[] = [];
  listaOtras: any[] = [];
  listaTrabajoProgramacion: any[] = [];
  listaTrabajoDocencia: any[] = [];
  listaTrabajoOtros: any[] = [];





  constructor( private skillsService: SkillsService,private educacionService: EducacionService, private experienciaService: ExperienciaService, private tokenService: TokenService) { }
  // constructor(private _datosPortfolio:PortfolioService) { }
  isLogged = false;


  ngOnInit(): void {
    this.cargarExperiencia();
    this.cargarEducacion();
    this.cargarSkill();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    };

  }
  cargarSkill():void{this.skillsService.lista().subscribe(data => {
    this.skill = [];
    this.listaTecnologias = [];
    this.listaIdiomas = [];
    this.listaSoftSkills = [];
    this.skill = data;
    this.skill.forEach(element => {
      if (element.areaS == "Tecnología") {
        this.listaTecnologias.push(element);
      } else if (element.areaS == "Idioma") {
        this.listaIdiomas.push(element);
      } else{ 
        this.listaSoftSkills.push(element) };

    })
  })


  };

  cargarEducacion(): void {
    this.educacionService.lista().subscribe(data => {
      this.educ = [];
      this.listaProgramacion = [];
      this.listaAntropologia = [];
      this.listaOtras = [];
      this.educ = data;
      this.educ.forEach(element => {
        if (element.areaEd == "Programación") {
          this.listaProgramacion.push(element);
        } else if (element.areaEd == "Antropología") {
          this.listaAntropologia.push(element);
        } else if (element.areaEd != "Programación" && element.areaEd != "Antropología") { this.listaOtras.push(element) };

      })
    })
  }



  cargarExperiencia(): void {
    this.experienciaService.lista().subscribe(data => {
      this.expe = [];
      this.listaTrabajoProgramacion = [];
      this.listaTrabajoDocencia = [];
      this.listaTrabajoOtros = [];
      this.expe = data;
      this.expe.forEach(element => {
        if (element.areaE == "Programacion") {
          this.listaTrabajoProgramacion.push(element);
        } else if (element.areaE == "Docencia") {
          this.listaTrabajoDocencia.push(element);
        } else if (element.areaE != "Docencia" && element.areaE != "Programacion") { this.listaTrabajoOtros.push(element) };

      })
    })
  }


  deleteExp(id: number) {
    if (id != undefined) {
      this.experienciaService.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }
      )

    }
  }

  deleteEdu(id: number) {
    if (id != undefined) {
      this.educacionService.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }
      )

    }
  }

  deleteSkill(id: number) {
    if (id != undefined) {
      this.skillsService.delete(id).subscribe(
        data => {
          this.cargarSkill();
        }
      )

    }
  }
}
/*
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

    })*/


