export interface Libros {
    estado:   string;
    ejemplar: Ejemplar[];
}

export interface Ejemplar {
    id:          number;
    nombre:      string;
    autor:       string;
    anio:        string;
    idioma:      string;
    imagen:      string;
    descripcion: string;
}

 // <------ Inicio de Sesion ----->
export interface Login {
    user:number;
    pass:number;
    token: string;
}
