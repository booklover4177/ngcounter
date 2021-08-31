import { ComponentFixture, TestBed } from '@angular/core/testing';
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
});
