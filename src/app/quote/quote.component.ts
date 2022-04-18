import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote("Gray","Nelson Mandela","Education is the key."),
    new Quote("me","Gray Odinga","I have seen it all just think positive.")
  ]


  addQuote(writtenQuote: Quote){
    this.quotes.push(writtenQuote)
  }

  upvote(i: any){
    this.quotes[i].upvotes++;
  }
  downvote(i: any){
    this.quotes[i].downvotes++;
  }
  delQuote(i: number){
    this.quotes.splice(i, 1)
  }

  initialNumber!: number;
  finalNumber!:number
  offset!:number


  highestUpvote(){
    this.initialNumber = 0
    this.finalNumber = 0


    for(this.offset=0 ; this.offset < this.quotes.length; this.offset++){
      this.finalNumber = this.quotes[this.offset].upvotes;
      if(this.finalNumber > this.initialNumber){this.initialNumber = this.finalNumber}

    }
    return this.initialNumber
  }
  constructor() { }

  ngOnInit(): void {
  }

}
