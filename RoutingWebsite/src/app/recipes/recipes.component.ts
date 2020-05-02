import { NewRecipeComponent } from "./newRecipe/new-recipe/new-recipe.component";
import { Recipe } from "./../models/recipe.model";
import { APIRecipesService } from "./../api-recipes.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
})
export class RecipesComponent implements OnInit, OnDestroy {
  recipesSub: Subscription;
  recipes: Recipe[] = [
    {
      title: "Chilli Sin Carne",
      ingredients: ["Beans", "Tomatoes", "Corn", "Spices", "Chili"],
      id: 1,
    },
    {
      title: "Scrambled Eggs",
      ingredients: ["Eggs", "Milk", "Bacon", "Toast"],
      id: 2,
    },
  ];

  constructor(private api: APIRecipesService, public dialog: MatDialog) {}

  ngOnDestroy(): void {
    this.recipesSub.unsubscribe();
  }

  ngOnInit(): void {}

  //Gets recipes from REST API
  GetRecipes() {
    this.recipesSub = this.api.getRecipes().subscribe((data: Recipe) => {
      console.log(data);
      this.recipes.concat(data);
    });
  }

  //Opens Modal Dialog to create new recipe
  AddRecipe(): void {
    const dialogRef = this.dialog.open(NewRecipeComponent, {
      width: "500px",
      data: {},
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
