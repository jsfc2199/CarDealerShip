import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEDD } from './data/cars.seed';
import { BRANDS_SEDD } from './data/brand.seed';

@Injectable()
export class SeedService {

  constructor(private carService: CarsService,
              private brandService: BrandsService){}

  populateDB() {
    this.carService.fillCarsWithSeedData(CARS_SEDD)
    this.brandService.fillBrandsWithSeedData(BRANDS_SEDD)
    return 'Seed executed';
  }
}
