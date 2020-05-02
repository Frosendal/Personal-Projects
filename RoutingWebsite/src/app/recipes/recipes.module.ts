import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { RecipesComponent } from "./recipes.component";
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [RecipesComponent],
  imports: [CommonModule, RecipesRoutingModule, MatDialogModule, FormsModule],
})
export class RecipesModule {}
