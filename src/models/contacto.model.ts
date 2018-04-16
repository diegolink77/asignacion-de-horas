import { Select, List } from "ionic-angular";

export interface Contacto {

    key?: string;
    unidad: Select;
    proyecto: Select;
    horas: number;
    minutos: number;
    
}