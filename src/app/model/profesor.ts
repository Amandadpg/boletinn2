export class Profesor {

    constructor(
        private _dni: string, 
        private _nombre: string, 
        private _apellidos: string, 
        private _telefono: string, 
        private _salarioBruto: number){
    }

    get dni(): string {return this._dni; }
    get nombre(): string {return this._nombre; }
    get apellidos(): string {return this._apellidos; }
    get telefono(): string {return this._telefono; }
    get salarioBruto(): number {return this._salarioBruto; }

    set dni(dni: string){this._dni = dni;}
    set nombre(nombre: string){this._nombre = nombre;}
    set apellidos(apellidos: string){this._apellidos = apellidos;}
    set telefono(telefono: string){this._telefono = telefono;}
    set salarioBruto(salarioBruto: number){this._salarioBruto = salarioBruto;}


    public getSalarioNeto(irpf: number) {
        return this._salarioBruto * (1 - (irpf/100));
    }
}
