import { Car } from './cars';

export class CartItem extends Car{
    constructor(car:Car){
        super();
        this.car = car;
    }

    car: Car;
    quantity: number=1;
    getPrice(): Number{
        return this.car.price * this.quantity;
    }
}