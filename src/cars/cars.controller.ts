import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    private cars = ['toyota', 'honda', 'Jeep'];

    @Get()
    getAllCars() {
      return this.cars
    }

    //El get debe contener un segmento de url adicional para diferenciarse de otros
    //Extraemos tambien el parametro que viene de la url, es decir obtener lo que viene en el :id y almacenarlo en id, usando @Param    
    @Get(':id')
    getCarById(@Param ('id') id:string){
      return this.cars[id]      
    }
}
