import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';

/*
  Generated class for the BrazilServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BrazilServiceProvider {
  
  items = [
    {
      name: "Christ The Redeemer",
      description: "Iconic landmark of rio",
      price:"29.99"
    
    },
    {
      name: "Sugar Loaf Mountain",
      description: "Iconic Natural wonder of rio",
      price:"19.99"
      
    
    },
    {
      name: "Copacabana",
      description: "Iconic tourist beach of rio",
      price:"0"
    
    },
    {
      name: "Ipanema",
      description: "What a lovely beach",
      price:"0"
    },
      ]
  constructor() {
    console.log('Hello BrazilServiceProvider Provider');
  }


  removeItem(index){
    this.items.splice(index,1);
  }

  addItem(item)
{this.items.push(item)
}  

}
