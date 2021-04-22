import { Component } from '@angular/core';
import { FizzBuzz } from './fizz-buzz.enum';

@Component({
  selector: 'realestate-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'FizzBuzz';
  limit = 100;
  fizzBuzz: string[];

  ngOnInit() {
    this.init();
  }

  private init() {
    const temp = [];
    for(let i =1; i <= this.limit; i++) {
      temp.push(this.calculateFizzBuzz(i));
    }
    this.fizzBuzz = temp;
  }

  calculateFizzBuzz(i: number) {
      if (!(i % 15)) {
        return FizzBuzz.FB;
      } else if (!(i % 3)) {
        return FizzBuzz.FI;
      } else if (!(i % 5)) {
        return FizzBuzz.BU;
      } else {
        return i+'';
      }
  }
}
