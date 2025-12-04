import { Alumno } from "./alumno";
import { Asignatura } from "./asignatura";

export class Matricula {

    constructor(
        private _alumno: Alumno, 
        private _asignatura: Asignatura, 
        private _notaTrim1: number, 
        private _notaTrim2: number, 
        private _notaTrim3: number){

    }

    get alumno(): Alumno {return this._alumno; }
    get asignatura(): Asignatura {return this._asignatura; }
    get notaTrim1(): number {return this._notaTrim1; }
    get notaTrim2(): number {return this._notaTrim2; }
    get notaTrim3(): number {return this._notaTrim3; }

    set alumno(alumno: Alumno){this._alumno = alumno;}
    set asignatura(asignatura: Asignatura){this._asignatura = asignatura;}
    set notaTrim1(notaTrim1: number){this._notaTrim1 = notaTrim1;}
    set notaTrim2(notaTrim2: number){this._notaTrim2 = notaTrim2;}
    set notaTrim3(notaTrim3: number){this._notaTrim3 = notaTrim3;}
    
    public getNotaMedia():number {
        let notaMedia: number = ((this.notaTrim1 + this._notaTrim2 + this.notaTrim3) / 3);
        
        return notaMedia;
    }
}
