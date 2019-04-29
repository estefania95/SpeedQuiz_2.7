import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BenvingudaComponent } from './components/benvinguda/benvinguda.component';
import { IniciSessioComponent } from './components/inici-sessio/inici-sessio.component';
import { TancarSessioComponent } from './components/tancar-sessio/tancar-sessio.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { HomeComponent } from './components/home/home.component';
import { JocComponent } from './components/joc/joc.component';
import { PuntuacioComponent } from './components/puntuacio/puntuacio.component';
import { BotigaComponent } from './components/botiga/botiga.component';

const routes: Routes = [
  { path: '', component: BenvingudaComponent },
  { path: 'iniciSessio', component: IniciSessioComponent },
  { path: 'tancarSessio', component: TancarSessioComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/joc', component: JocComponent },
  { path: 'home/botiga', component: BotigaComponent },
  { path: 'home/puntuacio', component: PuntuacioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
