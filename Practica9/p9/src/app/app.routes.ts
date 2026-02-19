import { Routes } from '@angular/router';
import { Formulario } from './components/formulario/formulario';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos';

export const routes: Routes = [
  { path: '', component: ListaAlumnosComponent },
  { path: 'formulario', component: Formulario }
];
