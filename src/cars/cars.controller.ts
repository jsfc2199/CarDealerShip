import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
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

    //Usamos el pipe ParseIntPipe para parsear lo que nos llegue como numero
    @Get(':id')
    getCarById(@Param ('id', ParseIntPipe) id:number){

      return this.carsService.findById(id)      
    }

    @Post()
    createCar( @Body() body: any ){
      return{
        body
      }
    }

    @Patch(':id')
    updateCar( @Param('id', ParseIntPipe )id: number){
      return{
        id
      }
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseIntPipe) id: number ){
      return{
        method: 'delete',
        id: id
      }
    }
}
