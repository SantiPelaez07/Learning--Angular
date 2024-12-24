import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent  implements OnInit {

  counter: number = 0;

  @Input() title!: string;

  @Output() counterEmmit: EventEmitter<number> = new EventEmitter();


  ngOnInit(): void {
    const storedCounter = localStorage.getItem('counter');
    this.counter = storedCounter !== null ? parseInt(storedCounter) || 0: 0;
  }

  setCounter(): void {
    this.counter = this.counter + 1;
    localStorage.setItem('counter', this.counter.toString())
    this.counterEmmit.emit(this.counter);
  }

  

}
