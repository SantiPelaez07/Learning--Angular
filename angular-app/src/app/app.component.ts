import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: String = 'Hola mundo angular!';
  users: String[] = ['Pepe', 'María', ' Juan', 'Luisa'];

  visible: boolean = false;

  setVisible(): void {
    this.visible = this.visible ? false: true;
  }
}
