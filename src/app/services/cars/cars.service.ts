import { Injectable } from '@angular/core';
import { Car } from 'src/app/shared/models/cars';


@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }

  getCarById(id:number): Car{
    return this.getAll().find(car => car.id == id)! ;
  }
  
  getAll():Car[]{
    return [
      {
        id: 1,
        price: 15740,
        name: 'Tesla',
        favorite: false,
        stars: 4.0,
        tags:['Automotive','Cars'],
        imageUrl: '/assets/tesla.jpg',
      },
      
      {
        id: 2,
        price: 30791,
        name: 'Hunda',
        favorite: false,
        stars: 3.5,
        tags:['Automotive','Cars'],
        imageUrl: '/assets/hunda.jpg',
      },

      {
        id: 3,
        price: 76419,
        name: 'Dodge',
        favorite: false,
        stars: 5.0,
        tags:['Automotive','Cars'],
        imageUrl: '/assets/dodge.jpg',
      },

      {
        id: 4,
        price: 51184,
        name: 'Jaguar',
        favorite: false,
        stars: 4.5,
        tags:['Automotive','Cars'],
        imageUrl: '/assets/Jaguar.jpg',
      },

      {
        id: 5,
        price: 73622,
        name: 'Jeep',
        favorite: false,
        stars: 4.0,
        tags:['Automotive','Cars'],
        imageUrl: '/assets/jeep.jpg',
      },

      {
        id: 6,
        price: 31175,
        name: 'Kia',
        favorite: false,
        stars: 4.0,
        tags:['Automotive','Cars'],
        imageUrl: '/assets/kia.jpg',
      },

      {
        id: 7,
        price: 46667,
        name: 'Land Rover',
        favorite: false,
        stars: 4.75,
        tags:['Automotive','Cars'],
        imageUrl: '/assets/land rover.jpg',
      },

      {
        id: 8,
        price: 36811,
        name: 'Nissan',
        favorite: false,
        stars: 4.0,
        tags:['Automotive','Cars'],
        imageUrl: '/assets/nissan.jpg',
      },

      {
        id: 9,
        price: 36811,
        name: 'BMW',
        favorite: false,
        stars: 4.0,
        tags:['Automotive','Cycle'],
        imageUrl: '/assets/BMW.webp',
      },

      {
        id: 10,
        price: 7300,
        name: 'Moto Guzzi',
        favorite: false,
        stars: 4.5,
        tags:['Automotive','Cycle'],
        imageUrl: '/assets/Moto-Guzzi.webp',
      },

      {
        id: 11,
        price: 25499,
        name: 'Harley Davidson',
        favorite: false,
        stars: 4.5,
        tags:['Automotive','Cycle'],
        imageUrl: '/assets/Harley-Davidson.webp',
      },

      {
        id: 12,
        price: 40000,
        name: 'Ducati',
        favorite: false,
        stars: 4.5,
        tags:['Automotive','Cycle'],
        imageUrl: '/assets/Ducati.webp',
      },

      {
        id: 13,
        price: 12519,
        name: 'Ernie Ruben',
        favorite: false,
        stars: 4.5,
        tags:['Automotive','Cycle'],
        imageUrl: '/assets/Honda-cycle.jpg',
      },

      {
        id: 14,
        price: 12519,
        name: 'Suzuki',
        favorite: false,
        stars: 4.0,
        tags:['Automotive','Cycle'],
        imageUrl: '/assets/Suzuki.jpg',
      },

      {
        id: 15,
        price: 13400,
        name: 'Triumph',
        favorite: false,
        stars: 5.0,
        tags:['Automotive','Cycle'],
        imageUrl: '/assets/Triumph.jpg',
      },

      {
        id: 16,
        price: 10790,
        name: 'KTM',
        favorite: false,
        stars: 4.0,
        tags:['Automotive','Cycle'],
        imageUrl: '/assets/KTM.jpg',
      },
    ]
  }
}
