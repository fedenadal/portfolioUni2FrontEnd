import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-edit-presentacion',
  templateUrl: './edit-presentacion.component.html',
  styleUrls: ['./edit-presentacion.component.css']
})
export class EditPresentacionComponent implements OnInit {
 persona:Persona =null;

  constructor(private activatedRouter:ActivatedRoute,
     private personaService: PersonaService,
     private router: Router ) { }

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data=>{this.persona = data}
    )
  }

  onUpdate():void{
    const id =this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(
      data =>{
        this.router.navigate(['']);
      }
    )
  }

}
