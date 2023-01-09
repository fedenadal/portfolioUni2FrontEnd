import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEducacionComponent } from './componentes/vistas/cv/new-educacion/new-educacion.component';
import { NewExperienciaComponent } from './componentes/vistas/cv/new-experiencia/new-experiencia.component';
import { NewSkillComponent } from './componentes/vistas/cv/new-skill/new-skill.component';
import { LandingUsuarioComponent } from './componentes/vistas/landing-usuario/landing-usuario.component';
import { EditPresentacionComponent } from './componentes/vistas/presentacion/edit-presentacion/edit-presentacion.component';

const routes: Routes = [
  {path:'landingUsuario', component:LandingUsuarioComponent},
  {path:'nuevaexp', component:NewExperienciaComponent},
  {path:'nuevaedu', component:NewEducacionComponent},
  {path:'nuevaskill', component:NewSkillComponent},
  {path: 'editPresentacion/:id', component:EditPresentacionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
