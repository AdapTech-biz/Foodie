import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() newItemAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  public name: string;
  public amount: number;

  constructor() {
   }

  ngOnInit(): void {
  }

  clickHappened() {
    this.newItemAdded.emit(new Ingredient(this.name, this.amount));
    this.clearEntry();
  }

  clearEntry() {
    this.name = '';
    this.amount = null;
  }

}
