import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MockRecipeService {
  //todo: Implement HTTP-request to semester-project api and get data from db
  getRecipes() {
    return [
      {
        title: "Oatmeal",
        ingredients: [
          { name: "Oat", quantity: "300 g" },
          { name: "Water", quantity: "2.5 dL" },
        ],
        method:
          "Heat up a pan to medium heat. Add both the oat and water. Stir continously until prefered thickness achieved",
      },
      {
        title: "Ice Coffee",
        ingredients: [
          { name: "Instant Coffee", quantity: "2 Tbsp" },
          { nane: "Sugar", quantity: "2 Tbsp" },
          { name: "Water", quantity: "2 Tbsp" },
          { name: "Milk", quantity: "2 dL" },
        ],
        method:
          "Mix in all the ingredients and whip into cream. Add the cream with the milk in a glass, mix and serve.",
      },
      //more recipes
    ];
  }
}
