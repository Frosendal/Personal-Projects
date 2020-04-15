import { APIRecipesService } from "./api-recipes.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { NewRecipeComponent } from "./recipes/newRecipe/new-recipe/new-recipe.component";

@NgModule({
  declarations: [AppComponent, NewRecipeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [APIRecipesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
