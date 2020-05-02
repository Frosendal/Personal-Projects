import { APIRecipesService } from "./api-recipes.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { NewRecipeComponent } from "./recipes/newRecipe/new-recipe/new-recipe.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [AppComponent, NewRecipeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [APIRecipesService],
  bootstrap: [AppComponent],
  entryComponents: [NewRecipeComponent],
})
export class AppModule {}
