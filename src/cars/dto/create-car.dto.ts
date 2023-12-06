import { IsString } from "class-validator";

export class CreateCarDTO {
    //la data no se debe modificar de como llega del cliente

    @IsString({message: "La clave no está escrita correctamente, se esperaba 'brand'"})
    readonly brand:string;

    @IsString()
    readonly model:string
}