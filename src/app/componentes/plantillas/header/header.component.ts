import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { TokenService } from 'src/app/servicios/token.service';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  form: FormGroup;
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;


  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }


  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
      }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe({
      next: data => {
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        location.reload();
                
      }     
    })
  }
  
  onLogOut():void {
    this.tokenService.logOut();
    window.location.reload();
    }


}

/*
}

get Email()
{
 return this.form.get('email');
}
get Password(){
return this.form.get('password');
}
onEnviar(event:Event)
{
event.preventDefault;
this.autenticationService.IniciarSesion(this.form.value).subscribe(data=>{
 console.log("DATA:" + JSON.stringify(data));
 this.ruta.navigate(['./vistas/landingUsuario'])
 //CORREGIR ACA!!!!
})
} */
