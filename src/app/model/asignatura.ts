import { Profesor } from "./profesor";

export class Asignatura {

    constructor(
        private _nombre: string, 
        private _descripcion: string, 
        private _numHoras: number, 
        private _profesor: Profesor){
    }

    get nombre(): string {return this._nombre; }
    get descripcion(): string {return this._descripcion; }
    get numHoras(): number {return this._numHoras; }
    get profesor(): Profesor {return this._profesor; }

    set nombre(nombre: string){this._nombre = nombre;}
    set descripcion(descripcion: string){this._descripcion = descripcion;}
    set numHoras(numHoras: number){this._numHoras = numHoras;}
    set profesor(profesor: Profesor){this._profesor = profesor;}
}
