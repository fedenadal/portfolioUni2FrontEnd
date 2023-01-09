
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//ROUTES
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

//SERVICIOS
import { PortfolioService } from '././servicios/portfolio.service';

//http client
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PresentacionComponent } from './componentes/vistas/presentacion/presentacion.component';
import { FooterComponent } from './componentes/plantillas/footer/footer.component';
import { ProyectosComponent } from './componentes/vistas/proyectos/proyectos.component';
import { CVComponent } from './componentes/vistas/cv/cv.component';
import { ContactoComponent } from './componentes/vistas/contacto/contacto.component';
import { HeaderComponent } from './componentes/plantillas/header/header.component';

//particles
import { NgParticlesModule } from "ng-particles";
 // formularios

import { FormBuilder, FormGroup, FormsModule,ReactiveFormsModule, Validators } from '@angular/forms';
import { NewExperienciaComponent } from './componentes/vistas/cv/new-experiencia/new-experiencia.component';
import { NewSkillComponent } from './componentes/vistas/cv/new-skill/new-skill.component';
import { inteceptorProvider } from './servicios/interceptor-service';
import { NewEducacionComponent } from './componentes/vistas/cv/new-educacion/new-educacion.component';
import { EditPresentacionComponent } from './componentes/vistas/presentacion/edit-presentacion/edit-presentacion.component';

// ng-circle-progress
//import { NgCircleProgressModule } from 'ng-circle-progress';




//CONST DE ROUTING//
const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'presentacion', component: PresentacionComponent  },
  { path: 'cv', component: CVComponent },
  { path: 'proyectos', component: ProyectosComponent },

  { path: '**', redirectTo: 'presentacion', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    PresentacionComponent,
    FooterComponent,
    ProyectosComponent,
    CVComponent,
    ContactoComponent,
    HeaderComponent,
    NewExperienciaComponent,
    NewSkillComponent,
    NewEducacionComponent,
    EditPresentacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgParticlesModule,
    ReactiveFormsModule,
    FormsModule,
     
         ],
         
  providers: [
    PortfolioService,
    inteceptorProvider
    
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
