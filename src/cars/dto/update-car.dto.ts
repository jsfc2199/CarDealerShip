import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDTO{

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?:string;

    @IsString({message: "La clave no está escrita correctamente, se esperaba 'brand'"})
    @IsOptional()
    readonly brand?:string;

    @IsString()
    @IsOptional()
    readonly model?:string
}