import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-presentacion',
  templateUrl: '././presentacion.component.html',
  styleUrls: ['././presentacion.component.css']
})
export class PresentacionComponent implements OnInit {
  persona: Persona = null;

  constructor(private personaService: PersonaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();

    if (this.tokenService.getToken()) {
      this.isLogged = true
    }
    else {this.isLogged = false }
    console.log(this.isLogged)
  }


  cargarPersona() {
    this.personaService.detail(1).subscribe(data => {
      this.persona = data
    })
  }
}
