import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  items: Ingredient[] = [
    new Ingredient("Apples", 3),
    new Ingredient("Onion", 6),
    new Ingredient("Bread", 1)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
