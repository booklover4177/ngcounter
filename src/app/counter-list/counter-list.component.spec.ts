import { ComponentFixture, TestBed } from '@angular/core/testing';
import { countReset } from 'node:console';
import { AppComponent } from '../app.component';
import { SuperCounter } from 'src/app/super-counter'
import { CounterListComponent } from './counter-list.component';

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



});
