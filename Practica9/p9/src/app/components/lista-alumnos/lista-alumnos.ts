import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alumnos } from '../../services/alumnos';

@Component({
  selector: 'app-lista-alumnos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-alumnos.html'
})
export class ListaAlumnosComponent implements OnInit {

  alumnos: any[] = [];

  constructor(private alumnoService: Alumnos) {}

  ngOnInit() {
    this.alumnoService.obtenerAlumnos().subscribe(data => {
      this.alumnos = data as any[];
    });
  }
}
