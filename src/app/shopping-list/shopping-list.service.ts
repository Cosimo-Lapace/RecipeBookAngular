/* import {Injectable} from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
@Injectable({
  providedIn: 'root',
})
export class ShoppingListSerice{
ingridientChanged = new Subject<Ingredient[]>();
startedEditing = new Subject<number>();
private  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  getIngridients(){
  return  this.ingredients.slice();
  }
  getIngridient(index:number){
    return this.ingredients[index];
  }
  addIngridient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingridientChanged.next(this.ingredients.slice())
  }
  addIngridients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients)
    this.ingridientChanged.next(this.ingredients.slice());
  }
  updateIngridient(index:number, newIngredient:Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingridientChanged.next(this.ingredients.slice())
  }
  deleteIngridient(index:number){
    this.ingredients.splice(index,1);
    this.ingridientChanged.next(this.ingredients.slice());
  }
}
 */
