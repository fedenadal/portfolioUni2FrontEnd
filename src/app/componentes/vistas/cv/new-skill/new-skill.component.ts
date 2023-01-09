import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  nombreS: string = '';
  nivelS: number;
  areaS: string='';


  constructor(private skillsService:SkillsService, private router : Router) { }

  ngOnInit(): void {}
  
  onCreate(): void{
    const skill = new Skills (this.nombreS, this.nivelS ,this.areaS);
    this.skillsService.save(skill).subscribe({
      next: data=>{
        alert ("Habilidad añadida");
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