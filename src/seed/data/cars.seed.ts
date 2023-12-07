import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';

export const CARS_SEDD: Car[] = [
    {
        id: uuid(),
        brand: 'toyota',
        model: 'corolla'
    },
    {
        id: uuid(),
        brand: 'WW',
        model: 'Jetta'
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 'Civic'
    },
]