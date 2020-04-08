import { MockRecipeService } from "./../mock-recipe.service";
import { ItemComponent } from "./../item/item.component";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.css"],
})
export class RecipeComponent implements OnInit {
  constructor(mockRecipeService: MockRecipeService) {
    this.Recipes = mockRecipeService.getRecipes();
  }

  Recipes;

  @Input() Title: string;
  @Input() Method: string;

  ngOnInit(): void {}
}
