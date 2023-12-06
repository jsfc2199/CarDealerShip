import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDTO } from './dto/update-car.dto';

@Controller('cars')
// @UsePipes(ValidationPipe)
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
    getCarById(@Param ('id', ParseUUIDPipe) id:string){

      return this.carsService.findById(id)      
    }

    @Post()
    // @UsePipes(ValidationPipe)
    createCar( @Body() createCarDTO: CreateCarDTO ){
      return this.carsService.createCar(createCarDTO)
    }

    @Patch(':id')
    updateCar( 
      @Param('id', ParseUUIDPipe )id: string,
      @Body() updateCarDto: UpdateCarDTO
      ){
      return this.carsService.updateCar(id, updateCarDto)
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseIntPipe) id: number ){
      return{
        method: 'delete',
        id: id
      }
    }
}
