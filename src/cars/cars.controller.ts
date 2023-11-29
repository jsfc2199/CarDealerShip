import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    //inyección de dependencias del servicio
    constructor(private readonly carsService: CarsService){}

    @Get()
    getAllCars() {
      return this.carsService.findAll()
    }

    //El get debe contener un segmento de url adicional para diferenciarse de otros
    //Extraemos tambien el parametro que viene de la url, es decir obtener lo que viene en el :id y almacenarlo en id, usando @Param    
    @Get(':id')
    getCarById(@Param ('id') id:string){
      return this.carsService.findById(+id)      
    }
}
