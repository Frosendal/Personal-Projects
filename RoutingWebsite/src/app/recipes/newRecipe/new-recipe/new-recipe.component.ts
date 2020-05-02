import { Recipe } from "./../../../models/recipe.model";
import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { NgForm } from "@angular/forms";
import { FormsModule } from "@angular/forms";
@Component({
  selector: "app-new-recipe",
  templateUrl: "./new-recipe.component.html",
  styleUrls: ["./new-recipe.component.css"],
})
export class NewRecipeComponent {
  constructor(
    public dialogRef: MatDialogRef<NewRecipeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  name: string = "Hello";

  onNoClick(): void {
    this.dialogRef.close();
  }
}
