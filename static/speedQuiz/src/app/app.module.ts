import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IniciSessioComponent } from './components/inici-sessio/inici-sessio.component';
import { TancarSessioComponent } from './components/tancar-sessio/tancar-sessio.component';
import { BenvingudaComponent } from './components/benvinguda/benvinguda.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { HeaderComponent } from './components/header/header.component';
import { PuntuacioComponent } from './components/puntuacio/puntuacio.component';
import { BotigaComponent } from './components/botiga/botiga.component';
import { JocComponent } from './components/joc/joc.component';
import { RatoliComponent } from './components/botiga/ratoli/ratoli.component';
import { TaulellPreguntesComponent } from './components/joc/taulell-preguntes/taulell-preguntes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IniciSessioComponent,
    TancarSessioComponent,
    BenvingudaComponent,
    RegistrarseComponent,
    HeaderComponent,
    PuntuacioComponent,
    BotigaComponent,
    JocComponent,
    RatoliComponent,
    TaulellPreguntesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
