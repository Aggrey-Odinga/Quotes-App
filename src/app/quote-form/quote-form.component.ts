import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Output() emitQuote = new EventEmitter()
  quoteStatements!: string 
  quotePublisher!: string;
  quoteAuthor!: string;
  quoteDate!: number;
  newQuote: any;

  submitQuote(){
    this.newQuote = new Quote(this.quotePublisher,this.quoteAuthor,this.quoteStatements)
    this.quoteStatements= ""
    this.quoteAuthor= ""
    this.quotePublisher= ""
    this.emitQuote.emit(this.newQuote)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
