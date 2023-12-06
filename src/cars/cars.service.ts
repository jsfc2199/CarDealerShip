import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid} from 'uuid'
import { CreateCarDTO } from './dto/create-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'toyota',
      model: 'corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'WW',
      model: 'Jetta',
    },
  ];

  //retornar todos los carros
  findAll() {
    return this.cars;
  }

  //retornar carro por id
  findById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id '${id}' not fournd`);
    return car;
  }

  //crear un carro
  createCar(carDto: CreateCarDTO){
      const car: Car = {
        id: uuid(),
        brand: carDto.brand,
        model: carDto.model,
        //trambien se puede enviar en vez de brand y model ...carDto
      }
      this.cars.push(car)
      
      return car
  }
}
