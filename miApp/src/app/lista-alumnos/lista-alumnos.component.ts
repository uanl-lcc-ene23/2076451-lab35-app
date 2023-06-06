import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {

  nombre="JAIME";
  alumnos: any=["Scarlett", "Luciana", "Pedro", "Alfredo", "Omar", "Miriam",]
}
