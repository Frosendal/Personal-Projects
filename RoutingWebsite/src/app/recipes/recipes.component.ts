import { APIRecipesService } from "./../api-recipes.service";
import { Component, OnInit } from "@angular/core";
import { basename } from "path";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
})
export class RecipesComponent implements OnInit {
  recipes;

  constructor(private api: APIRecipesService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  getRecipes() {
    this.recipes = this.api.getRecipes();
  }
  newRecipe() {
    let dialogRef = this.dialog.open();
  }
}
