// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ReservaComponent } from './reserva/reserva.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'reserva', component: ReservaComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Redirecciona a 'home' por defecto
  { path: '**', redirectTo: '/inicio' } // Maneja rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
