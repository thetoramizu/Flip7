import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Flip7Component } from './flip7/flip7/flip7.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [Flip7Component],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'flip7-test';

  
}
