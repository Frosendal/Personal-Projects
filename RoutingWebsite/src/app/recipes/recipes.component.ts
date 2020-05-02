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
      name: "Boiled Eggs",
      method: "Boil the eggs for 5 min. Serve.",
      introduction: "Delicious for breakfast",
      items: [
        {name: "Chicken egg",
        type: "Egg",
        amount: 4,
        modelId: 0
      },
      {name: "Water",
        type: "Liquid",
        amount: 500,
        modelId: 0
      }
    ],
      modelId: 0
    },
    {
      name: "Veggie Pizza",
      method: "Make dough. Add topping. Put in oven. Take out of oven. Done.",
      introduction: "Perfect for a firday night with boyz",
      items: [
        {
          name: "Potatoe",
          amount: 10,
          type: "Vegetable",
          modelId: 0
        },
        {
          name: "Flour",
          amount: 500,
          type: "Baking stuff",
          modelId: 0
        }
      ],
      modelId: 0
    },
    {
      name: "Rissotto",
      method: "Fry rice with onion and add white wine. Cook rice by adding portions of vegetable broth. Finish off by adding parmesan and parsley.",
      introduction: "Fancy pants dinner",
      items: [
        {
          name: "Rice",
          amount: 346,
          type: "I dunno",
          modelId: 0
        },
        {
          name: "Vegetable broth",
          amount: 5,
          type: "Liquid",
          modelId: 0
        },
        {
          name: "White wine",
          amount: 10,
          type: "Alcohol",
          modelId: 0
        },
        {
          name: "Parsley",
          amount: 6,
          type: "Herb",
          modelId: 0
        },
        {
          name: "Parmesan",
          amount: 100,
          type: "Cheese",
          modelId: 0
        }
      ],
      modelId: 0
    }
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
      this.recipes.concat(result)
      console.log(result);
    });
  }
}
