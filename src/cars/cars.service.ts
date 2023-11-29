import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
    
  private cars = [
    {
      id: 1,
      brand: 'toyota',
      model: 'corolla',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: 3,
      brand: 'WW',
      model: 'Jetta',
    },
  ];

  //retornar todos los carros
  findAll(){
    return this.cars
  }

  //retornar carro por id
  findById(id:number){
    return this.cars.find(car => car.id === id)
  }
}
