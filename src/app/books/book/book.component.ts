import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { book } from '../../types/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit  {

  @Input() book: book = {} as book;
isInCart:boolean=false;


 
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  
  } 

    addToCart(){
      this.isInCart=true;
this.cartService.add(this.book)
// this.bookemitter.emit(this.book )    
  }

removeFromCart(){
   this.isInCart=false;
   this.cartService.remove(this.book)
}

}
