import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { products} from '../products';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  products = products;

  constructor(private _locaton: Location) { }

  ngOnInit(): void {
  }

  toBack(){
    this._locaton.back();
  }

  filterItemByCategory(category: string){
    return this.products.filter(product => product.category == category);
}

}
