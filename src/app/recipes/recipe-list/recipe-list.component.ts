import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() activeItem = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe("Pizza", "Tasty pizza", "https://media.gettyimages.com/photos/cheesy-pepperoni-pizza-picture-id938742222?s=612x612"),
    new Recipe("Ham and Cheese", "Great Sandwich", "https://media4.s-nbcnews.com/i/newscms/2017_15/1206946/grilled-cheese-ham-today-170411-tease_2b8383ef006f363558f25c8c168ecbc9.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

  itemSelected(recipe: Recipe) {
    console.log(recipe);
    this.activeItem.emit(recipe);
  }

}
