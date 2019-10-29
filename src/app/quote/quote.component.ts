import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    quotes: Quote[] = [
          new Quote(1,'Dan: Talk is cheap. Show me the code.', '“Talk is cheap. Show me the code.”','Dan' ,new Date("2020,3,14")),
          new Quote(2,'Dan: Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live','Programs must be written for people to read, and only incidentally for machines to execute', 'Dan',new Date(2019,6,9)),
          new Quote(3,'Dan: Programs must be written for people to read, and only incidentally for machines to execute','Any fool can write code that a computer can understand. Good programmers write code that humans can understand.','Dan' ,new Date(2022,1,12)),
          new Quote(4,'Dan: What one programmer can do in one month, two programmers can do in two months.','Im not a great programmer; Im just a good programmer with great habits' , 'Dan',new Date(2019,0,18)),
          new Quote(5,'Dan: Solve math homework','That is the thing about people who think they hate computers. What they really hate is lousy programmers.', 'Don',new Date(2019,2,14)),
          new Quote(6,'Dan: A primary cause of complexity is that software vendors uncritically adopt almost any feature that users want','Just a little reminder to everyone that anything is possible, especially when you’ve hit a wall with your code and feel like you’re getting nowhere', 'Dan',new Date(2030,3,14)),
        ];
        toggleDetails(index){
          this.quotes[index].showDescription = !this.quotes[index].showDescription;
        }
      addNewQuote(quote){
        let quoteLength = this.quotes.length;
        quote.id = quoteLength+1;
        quote.complete = new Date(quote.completeDate)
        this.quotes.push(quote)
      }
        deleteQuote(isComplete, index){
          if (isComplete) {
            let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
          
          if (toDelete) {
            this.quotes.splice(index,1)
          }
        }
      }
        
        constructor() { }
       
        ngOnInit() {
        }
      
      }
