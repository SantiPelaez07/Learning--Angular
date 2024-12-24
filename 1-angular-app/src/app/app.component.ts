import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    const storage = localStorage.getItem('counter')
    this.counter = storage !== null ? this.counter = parseInt(storage) || 0: 0;
  }



  
  title: String = 'Hola mundo angular!';
  subtitle = 'Contador con estado de sesión';
  users: String[] = ['Pepe', 'María', ' Juan', 'Luisa'];

  visible: boolean = false;

  counter: number = 0;

  setVisible(): void {
    this.visible = this.visible ? false: true;
  }

  setCounter(event: number): void {
    this.counter = event;
  }
}
