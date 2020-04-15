import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class APIRecipesService {
  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Object> {
    return this.http.get(
      "https://splitlistwebapi.azurewebsites.net/api/Groups/1"
    );
  }
}
