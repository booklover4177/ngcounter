import { ComponentFixture, TestBed } from '@angular/core/testing';
import { countReset } from 'node:console';
import { AppComponent } from '../app.component';

import { CounterListComponent } from './counter-list.component';

describe('CounterListComponent', () => {
  let component: CounterListComponent;
  let fixture: ComponentFixture<CounterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterListComponent ]
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

  it("create button should create a counter", ()=>{
    const createCounterBtn=fixture.nativeElement.querySelector("#createCounter");
    createCounterBtn.click();
    expect(component.counters.length).toBe(1);

  })

  it("if counter value is 0, the value is not decreased when - button is clicked", ()=>{
    const createCounterBtn=fixture.nativeElement.querySelector("#createCounter");
    createCounterBtn.click();
    const minusBtn=fixture.nativeElement.querySelector("#minusBtn");
    minusBtn.click();
    expect(component.counters[component.counters.length-1].value).toEqual(0);
  })
});
