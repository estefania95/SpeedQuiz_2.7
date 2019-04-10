import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IniciSessioComponent } from './components/inici-sessio/inici-sessio.component';
import { TancarSessioComponent } from './components/tancar-sessio/tancar-sessio.component';
import { BenvingudaComponent } from './components/benvinguda/benvinguda.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IniciSessioComponent,
    TancarSessioComponent,
    BenvingudaComponent,
    RegistrarseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
