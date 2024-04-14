import { Component, OnInit } from '@angular/core';
import { Car } from '../shared/models/cars';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CarsService } from '../services/cars/cars.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {
  car!:Car;

  constructor( private activatedRoute:ActivatedRoute, private carService:CarsService, private cartService:CartService, private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if(params['id']){
        this.car = carService.getCarById(params['id']);
      }
    })
   }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.car);
    this.router.navigateByUrl('/cart-page');
  }

}
