import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter';
import { SuperCounter } from '../super-counter';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {

  public name: string = "Counter Wall";
  counters: Counter[] = [];
  superCounters: SuperCounter[] = [];

  constructor() { }

  create() {

    if (this.counters.length < 3) {
      let newCounter = new Counter();
      this.counters.push(newCounter);
    } else {
      let counterVal1 = this.counters[0].value;
      let counterVal2 = this.counters[1].value;
      let counterVal3 = this.counters[2].value;

      let newSuperCounter = new SuperCounter(counterVal1, counterVal2, counterVal3);
      this.superCounters.push(newSuperCounter);
      this.counters.pop();
      this.counters.pop();
      this.counters.pop();
    }


  }

  subtract() {
    if (this.counters.length != 0) {
      this.counters[this.counters.length - 1].subtract();
    }
    if (this.superCounters.length != 0 && this.counters.length===0) {
      this.superCounters[this.superCounters.length - 1].superSubtract();
    }

  }

  add() {
    if (this.counters.length != 0) {
      this.counters[this.counters.length - 1].add();
    }
    if (this.superCounters.length != 0 && this.counters.length===0) {
      this.superCounters[this.superCounters.length - 1].superAdd();
    }

  }


  ngOnInit(): void {
  }

}
