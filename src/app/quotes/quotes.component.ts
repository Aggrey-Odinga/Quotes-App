import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] =[
    new Quote (1, "Gray", "Nelson Mandela", "It always seems impossible until it's done.", 0, 0),
    new Quote (2, "Mike", " Maya Angelou", "When someone shows you who they are believe them the first time.", 0, 0),
    new Quote (3, "Fay", "Julius Nyerere", "Independence cannot be real if a nation depends upon gifts.", 0, 0)
    
  ]
addQuote(writtenQuote: Quote){
  this.quotes.push(writtenQuote);
}
upvote(i: any){
  this.quotes[i].upvotes++;
}
downvote(i: any) {
    this.quotes[i].downvotes++;
  }
delQuote(i: number){
  this.quotes.splice(i, 1)
}

arr: number[] = this.quotes.map((quote: { upvotes: any; }) =>quote.upvotes)
  highest = Math.max(...this.arr)

  constructor() { }

  ngOnInit() {
  }

}
