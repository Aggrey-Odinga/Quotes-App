import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() emitQuote = new EventEmitter<Quote>();
  id!: number;
  quote!: string;
  quotePublisher!: string;
  quoteAuthor!: string;
  quoteDate!: number;
  theQuote: any
  upvotes!: number;
  downvotes!: number;

  submitQuote(){
    this.theQuote = new Quote(this.id,this.quotePublisher,this.quoteAuthor,this.quote,this.upvotes,this.downvotes)
    this.quotePublisher=''
    this.quote=''
    this.quoteAuthor=''
    this.emitQuote.emit(this.theQuote)
  }
  


  constructor() { }

  ngOnInit(): void {
  }

}
