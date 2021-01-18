import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { FizzBuzz } from './fizz-buzz.enum';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('create the app component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`the app component have as title 'FizzBuzz'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('FizzBuzz');
  });

  it('render app component title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to FizzBuzz!'
    );
  });

  // FizzBuzz
  it('is FizzBuzz', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const fizzbuzz = [15, 30, 45, 90];
    fizzbuzz.map(item => expect(app.calculateFizzBuzz(item)).toEqual(FizzBuzz.FB));
  });

  // Fizz
  it('is Fizz', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const fizzbuzz = [3, 9, 27, 81];
    fizzbuzz.map(item => expect(app.calculateFizzBuzz(item)).toEqual(FizzBuzz.FI));
  });

  // Buzz
  it('is Buzz', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const fizzbuzz = [10, 40, 55, 80];
    fizzbuzz.map(item => expect(app.calculateFizzBuzz(item)).toEqual(FizzBuzz.BU));
  });

  // No FizzBuzz
  it('is not FizzBuzz', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const fizzbuzz = [25, 35, 70, 100];
    fizzbuzz.map(item => expect(app.calculateFizzBuzz(item)).not.toEqual(!FizzBuzz.FB));
  });

  // No Fizz
  it('is not Fizz', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const fizzbuzz = [15, 30, 50, 90];
    fizzbuzz.map(item => expect(app.calculateFizzBuzz(item)).not.toEqual(!FizzBuzz.FI));
  });

  // No Buzz
  it('is not Buzz', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const fizzbuzz = [45, 15, 9, 60];
    fizzbuzz.map(item => expect(app.calculateFizzBuzz(item)).not.toEqual(FizzBuzz.BU));
  });


  // Render Fizz/Buzz/FizzBuzz elements

  it('render FizzBuzz elements', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement;
    const fizzbuzz = compiled.queryAll(By.css('.fizzbuzz')).length;
    expect(fizzbuzz === 100 / 15);
  });

  it('render Fizz elements', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement;
    const fizzbuzz = compiled.queryAll(By.css('.fizzbuzz')).length;
    const fizz = compiled.queryAll(By.css('.fizz')).length;
    expect(fizz - fizzbuzz === 100/3 - 100/15);
  });

  it('render Buzz elements', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement;
    const fizzbuzz = compiled.queryAll(By.css('.fizzbuzz')).length;
    const buzz = compiled.queryAll(By.css('.fizz')).length;
    expect(buzz - fizzbuzz === 100/3 - 100/15);
  });
});
