import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Direccion } from './model/direccion';
import { FormsModule } from '@angular/forms';
import { Alumno } from './model/alumno';
import { Asignatura } from './model/asignatura';
import { Profesor } from './model/profesor';
import { Matricula } from './model/matricula';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  protected readonly title = signal('boletinn2');
//Es para probar el codigo
  public direccion1: Direccion = new Direccion(1,"41510", 'Sevilla', 'Mairena del Alcor', 'Sevilla');
  public direccion2: Direccion = new Direccion(2,"41510", 'Cadiz', 'Rota', 'Cadiz');

  public alumno1: Alumno = new Alumno("23898963C", "Amanda", "De La Prida", new Date(), this.direccion1);
  public alumno2: Alumno = new Alumno("23458123C", "Maria", "Jimenez", new Date(), this.direccion2);

  public profesor1: Profesor = new Profesor("23458963C", "Javi", "Garcia", "568978453", 1200.23);
  public profesor2: Profesor = new Profesor("78352463C", "Vladi", "Rico", "568965723", 2000.98);

  public asignatura1: Asignatura = new Asignatura("Diseño","Diseño de interfaces web", 180, this.profesor1);
  public asignatura2: Asignatura = new Asignatura("Proyecto","Proyecto intermodular", 50, this.profesor2);

  public matricula1: Matricula = new Matricula(this.alumno1, this.asignatura1, 10,9,8);
  public matricula2: Matricula = new Matricula(this.alumno1, this.asignatura2, 7,5,3);
  public matricula3: Matricula = new Matricula(this.alumno2, this.asignatura1, 6,2,7);
  public matricula4: Matricula = new Matricula(this.alumno2, this.asignatura2, 10,6,8);

  public matriculas: Matricula[] = [this.matricula1, this.matricula2, this.matricula3, this.matricula4];

  public getAlumnos(): Alumno[] {
    let alumnosDistintos: Alumno[] = [];
    for(let i = 0; i < this.matriculas.length; i++) {
      alumnosDistintos.push(this.matriculas[i].alumno);

    }

    let setAlumnos: Set<Alumno> = new Set<Alumno>(alumnosDistintos);
    alumnosDistintos = [...setAlumnos];

    return alumnosDistintos;
  }

  
  


}
