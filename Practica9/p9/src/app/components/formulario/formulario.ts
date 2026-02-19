import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Alumnos } from '../../services/alumnos';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html'
})
export class Formulario {

  constructor(private alumno: Alumnos) {}

  guardarAlumno(form: any) {
    this.alumno.agregarAlumno(form.value).subscribe(() => {
      alert('Alumno agregado');
      form.reset();
    });
  }
}
