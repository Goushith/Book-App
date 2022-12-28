import { Injectable } from '@angular/core';
import { book } from '../types/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cart: Array<book>=[] 
  constructor() { }

  add(book:book){
    console.log(book);
    
this.cart.push(book)
  }


  get(){
    return this.cart; 
  }

  remove(book:book){
this.cart=this.cart.filter(b=>b != book)

  }
}
