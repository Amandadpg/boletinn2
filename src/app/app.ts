import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Direccion } from './model/direccion';
import { FormsModule } from '@angular/forms';
import { Alumno } from './model/alumno';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  protected readonly title = signal('boletinn2');
//Es para probar el codigo
  public direccion: Direccion = new Direccion(1,"41510", 'Sevilla', 'Mairena del Alcor', 'Sevilla');
  public alumno = new Alumno("dni","nombre","apellidos",new Date(), this.direccion);


  
  


}
