import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() emitQuote = new EventEmitter()
  quoteStatement!: string;
  quotePublisher!: string;
  quoteAuthor!: string;
  quoteDate!: number;
  theQuote: any

  submitQuote(){
    this.theQuote = new Quote(this.quotePublisher,this.quoteAuthor,this.quoteStatement)
    this.quotePublisher=''
    this.quoteStatement=''
    this.quoteAuthor=''
    this.emitQuote.emit(this.theQuote)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
