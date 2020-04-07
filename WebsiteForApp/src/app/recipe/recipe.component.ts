import { ItemComponent } from './../item/item.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  recipeItem : Array<Object> = [new {"Flour", "500g"}];

}
