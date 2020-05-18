import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Pizza", "Tasty pizza", "https://media.gettyimages.com/photos/cheesy-pepperoni-pizza-picture-id938742222?s=612x612"),
    new Recipe("Pizza", "Tasty pizza", "https://media.gettyimages.com/photos/cheesy-pepperoni-pizza-picture-id938742222?s=612x612")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
