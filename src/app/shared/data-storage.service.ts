/* import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map, tap } from "rxjs";
import { Store } from "@ngrx/store";
import * as AppReducer from '../store/app.reducer';
import * as RecipesActions from '../recipes/store/recipe.actions';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {

  constructor(private http:HttpClient, private recipeService: RecipeService,private store :Store<AppReducer.AppState>){}


  storeRecipes(){
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://udemy-project-84ee2-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',recipes)
    .subscribe((resposne)=>{
      console.log(resposne);
    })
  }

  fetchRecipes(){

      return  this.http.get<Recipe[]>('https://udemy-project-84ee2-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
        )
        .pipe(
    map((recipes)=>{
      return recipes.map((recipes)=>{
        return {...recipes,ingridients: recipes.ingridients ? recipes.ingridients : []}
      })
    }),
    tap((recipes)=>{
      this.store.dispatch(new RecipesActions.SetRecipes(recipes));
    })
)

  }








}
 */
