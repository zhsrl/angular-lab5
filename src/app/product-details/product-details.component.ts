import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  counter = 0;

  
  constructor(private route: ActivatedRoute, private _location: Location,) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find((product) => product.id === productIdFromRoute);

  }

  back(){
    this._location.back();
  }

  remove(){
    
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));


    const index = products.findIndex((product) => product.id === productIdFromRoute);

    console.log(index);
    console.log(productIdFromRoute);
   
    products.splice(index, 1);
    this._location.back();
  }

  like(){
    
    
    this.counter++
  }
}
