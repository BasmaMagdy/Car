import { Component, OnInit } from '@angular/core';
import { CarsService } from '../services/cars/cars.service';
import { Car } from '../shared/models/cars';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  providers: [CarsService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public cars: Car[] = [];
  constructor(private cs:CarsService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      if(params["searchItem"]){
        this.cars =  this.cs.getAll().filter(car => car.name.toLowerCase().includes(params["searchItem"].toLowerCase()));
      }
      else{
        console.log(this.cs.getAll());
        this.cars =  this.cs.getAll();
      }
    })

    
  }

}
