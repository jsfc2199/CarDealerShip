import { Brand } from "src/brands/entities/brand.entity";
import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';

export const BRANDS_SEDD: Brand[] = [
    {
        id: uuid(),
        name: 'toyota',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Volvo',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Toyota',
        createdAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Tesla',
        createdAt: new Date().getTime()
    },
]