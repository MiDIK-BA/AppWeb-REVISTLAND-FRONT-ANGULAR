export class ComentarioM {
    public get nombreUsuario(): string | undefined {
        return this._nombreUsuario;
    }
    public set nombreUsuario(value: string | undefined) {
        this._nombreUsuario = value;
    }
    public get idPulicacion(): number {
        return this._idPulicacion;
    }
    public set idPulicacion(value: number) {
        this._idPulicacion = value;
    }
    public get fecha(): string {
        return this._fecha;
    }
    public set fecha(value: string) {
        this._fecha = value;
    }
    public get comentario(): string {
        return this._comentario;
    }
    public set comentario(value: string) {
        this._comentario = value;
    }
    
    constructor(
        private _nombreUsuario: string | undefined,
        private _comentario: string,
        private _fecha: string,
        private _idPulicacion: number
    ) { }
}