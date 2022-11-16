
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//ROUTES
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

//SERVICIOS
import { PortfolioService } from './servicios/portfolio.service';

//http client
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { FooterComponent } from './footer/footer.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { CVComponent } from './cv/cv.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HeaderComponent } from './header/header.component';

//particles
import { NgParticlesModule } from "ng-particles";




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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgParticlesModule,
  ],
  providers: [
    PortfolioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
