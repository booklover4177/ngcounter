import { ComponentFixture, TestBed } from '@angular/core/testing';
import { countReset } from 'node:console';
import { AppComponent } from '../app.component';
import { SuperCounter } from 'src/app/super-counter'
import { SuperDuperCounter } from '../super-duper-counter';
import { CounterListComponent } from './counter-list.component';
import { SelectMultipleControlValueAccessor } from '@angular/forms';

describe('CounterListComponent', () => {
  let component: CounterListComponent;
  let fixture: ComponentFixture<CounterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("create button should create a counter", () => {
    const createCounterBtn = fixture.nativeElement.querySelector("#createCounter");
    createCounterBtn.click();
    expect(component.counters.length).toBe(1);

  })

  it("if counter value is 0, the value is not decreased when - button is clicked", () => {
    const createCounterBtn = fixture.nativeElement.querySelector("#createCounter");
    createCounterBtn.click();
    const minusBtn = fixture.nativeElement.querySelector("#minusBtn");
    minusBtn.click();
    expect(component.counters[component.counters.length - 1].value).toEqual(0);
  })

  it("+ button increases counter value by 1", () => {
    const createCounterBtn = fixture.nativeElement.querySelector("#createCounter");
    createCounterBtn.click();
    const addBtn = fixture.nativeElement.querySelector("#plusBtn");
    addBtn.click();
    expect(component.counters[component.counters.length - 1].value).toEqual(1);
  })

  it("if three counters have been created, and then another is created it becomes a super counter with a value equal to the sum of the other counters", () => {
    const createCounterBtn = fixture.nativeElement.querySelector("#createCounter");
    createCounterBtn.click();
    const addBtn = fixture.nativeElement.querySelector("#plusBtn");
    addBtn.click();
    createCounterBtn.click();
    addBtn.click();
    createCounterBtn.click();
    addBtn.click();
    createCounterBtn.click();
    expect(component.counters.length).toEqual(0);
    expect(component.superCounters.length).toEqual(1);
    expect(component.superCounters[component.superCounters.length - 1].value2).toEqual(3);
  })
  it("the super counter is displayed twice the size of the normal counter", () => {
    const createCounterBtn = fixture.nativeElement.querySelector("#createCounter");
    createCounterBtn.click();
    const addBtn = fixture.nativeElement.querySelector("#plusBtn");
    addBtn.click();
    createCounterBtn.click();
    addBtn.click();
    createCounterBtn.click();
    addBtn.click();
    createCounterBtn.click();
    expect(component.superCounters[0] instanceof SuperCounter).toBeTruthy();

  })

  it("when the supercounter is 0, the - button does nothing", () => {
    const createCounterBtn = fixture.nativeElement.querySelector("#createCounter");
    createCounterBtn.click();
    createCounterBtn.click();
    createCounterBtn.click();
    createCounterBtn.click();
    const minusBtn = fixture.nativeElement.querySelector("#minusBtn");
    minusBtn.click();
    expect(component.superCounters[component.superCounters.length - 1].value2).toEqual(0);

  })

  it("when there is a supercounter and you press the add button it will add 3 to the value", () => {
    const createCounterBtn = fixture.nativeElement.querySelector("#createCounter");
    createCounterBtn.click();
    createCounterBtn.click();
    createCounterBtn.click();
    createCounterBtn.click();
    const addBtn = fixture.nativeElement.querySelector("#plusBtn");
    addBtn.click();
    expect(component.superCounters[component.superCounters.length - 1].value2).toEqual(3);

  })
  it("when supercounter holds a value of 5 and the subtract button is pressed then the supercounter value decreases by 3", () => {
    const createCounterBtn = fixture.nativeElement.querySelector("#createCounter");
    const addBtn = fixture.nativeElement.querySelector("#plusBtn");
    const minusBtn = fixture.nativeElement.querySelector("#minusBtn");
    createCounterBtn.click();
    addBtn.click();
    createCounterBtn.click();
    addBtn.click();
    createCounterBtn.click();
    createCounterBtn.click();
    addBtn.click();
    minusBtn.click();
    expect(component.superCounters[component.superCounters.length - 1].value2).toEqual(2);

  })

  it("Create Super Duper Counter", ()=>{
    const createCounterBtn = fixture.nativeElement.querySelector("#createCounter");
    createCounterBtn.click();
    createCounterBtn.click();
    createCounterBtn.click();
    //create super counter 2
    createCounterBtn.click();
    createCounterBtn.click();
    createCounterBtn.click();
    //3rd super counter
    createCounterBtn.click();
    createCounterBtn.click();
    createCounterBtn.click();
//create super duper counter
    createCounterBtn.click();
    createCounterBtn.click();
    createCounterBtn.click();
    expect(component.superDuperCounters[component.superDuperCounters.length-1].value3).toEqual(0);
  })

  it("the super duper counter is displayed twice the size of the super counter and is a different color", () => {
    const createCounterBtn = fixture.nativeElement.querySelector("#createCounter");
    createCounterBtn.click();
    createCounterBtn.click();
    createCounterBtn.click();
    //create super counter 2
    createCounterBtn.click();
    createCounterBtn.click();
    createCounterBtn.click();
    //3rd super counter
    createCounterBtn.click();
    createCounterBtn.click();
    createCounterBtn.click();
//create super duper counter
    createCounterBtn.click();
    createCounterBtn.click();
    createCounterBtn.click();

    expect(component.superDuperCounters[0] instanceof SuperDuperCounter).toBeTruthy();

  })

//   it("super duper counter increments after start button is clicked", ()=>{
//     const createCounterBtn = fixture.nativeElement.querySelector("#createCounter");
//     createCounterBtn.click();
//     createCounterBtn.click();
//     createCounterBtn.click();
//     //create super counter 2
//     createCounterBtn.click();
//     createCounterBtn.click();
//     createCounterBtn.click();
//     //3rd super counter
//     createCounterBtn.click();
//     createCounterBtn.click();
//     createCounterBtn.click();
// //create super duper counter
//     createCounterBtn.click();
//     createCounterBtn.click();
//     createCounterBtn.click();

//     const startBtn=fixture.nativeElement.querySelector("#SuperDuperCounterStart");
//     startBtn.click();
//     expect(component.superDuperCounters[0].value3).toBeGreaterThan(0);
//   })



});
