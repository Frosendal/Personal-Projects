import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class APIRecipesService {
  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Object> {
    // const obs = new Observable<{title: string}[]>([{title: 'recipe 1'}])
    return this.http.get("http://dummy.restapiexample.com/api/v1/employee/1");
  }
}
