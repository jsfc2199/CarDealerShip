import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid} from 'uuid'
import { CreateCarDTO, UpdateCarDTO } from './dto';


@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'toyota',
    //   model: 'corolla',
    // },     
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

  updateCar(id: string, updateCar: UpdateCarDTO){
    
    let carInDb = this.findById(id) //para no validar dos veces lo mismo

    this.cars = this.cars.map(car => {
      if(car.id === id){
        carInDb = {
          ...carInDb, //esparzo las propiedaades actualices del carro
          ...updateCar, //reemplazo las propiedades de carInDb por las nuevas en updateCar
          id //sobre escribo el id que venga en updateCar por el original
        }
        return carInDb
      }
      return car; //si no es el carro que tenga el mismo id simplemente se retorna lo que habia
    })

    return carInDb
  }

  deleteCar(id: string){
    const car  = this.findById(id)

    this.cars = this.cars.filter(car => {
      return car.id !== id 
    })     
  }
}
