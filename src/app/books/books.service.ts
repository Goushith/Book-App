import { Injectable } from '@angular/core';

@Injectable()

export class BooksService {

  constructor() { }
  getBooks(){
    return  [
      {
      name:'clean Code',
      author:'robert C martin',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXiCLaXo-haziow4z37tTCzYgsOZ2Bc2kJfRoedHtDO5l93LMo",
      amount:700
    },
  
    {
  
      name:'The Pragmatic Programmer',
      author:'Andy Hunt and Dave Thomas',
      image:"https://rukminim1.flixcart.com/image/416/416/ks7tuvk0/book/g/i/d/the-pragmatic-programmer-20th-anniversary-edition-your-journey-original-imag5u3ze9jtyjam.jpeg?q=70",
       amount:800
    },
    {
  
      name:'Code Complete',
      author:'Steve McConnel',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWN_owQtBKfgNUbQRq51jIPLcvyC5anNjHq0P-RKN2uGv-xfcM",
       amount:500
    },
    {
  
      name:'Cracking the Coding Interview',
      author:' Gayle Laakmann McDowel',
      image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1596829126l/54845619._SX318_.jpg",
       amount:800
    },
    {
  
      name:'Coders at Work',
      author:'Peter Seibel',
      image:"https://www.meripustak.com/MeripustakStatic/FullImage/Coders-at-Work_251768.jpg",
       amount:800
    },
  
    {
  
      name:'JavaScript: The Good Parts  ',
      author:'Douglas Crockford',
  image:"https://m.media-amazon.com/images/I/51aS0su4SjL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg",
      amount:800
    },
    ]
  }
}
