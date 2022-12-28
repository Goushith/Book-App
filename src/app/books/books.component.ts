import { Component, OnInit } from '@angular/core';
import { book } from '../types/book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:book[] =[]

  
  constructor(private bookService:BooksService) {
  
  }
 


 

// isDisabled:boolean =false;


// handleClick(){
// // alert('cLICKED BITCH')
// this.isDisabled =true
// }
// myName=""
  // handleInput(event:any){
  //   this.myName=event.target.value ;
    
  // }
isShowing:boolean=true;

// toogleBooks(){
//   //if is showing is true
//   //if is showing is 
//   this.isShowing=!this.isShowing;
// }


  ngOnInit(): void {
    this.books=this.bookService.getBooks()
  }

// addToCart(book:any){
//   console.log(book);
  
// }

}
