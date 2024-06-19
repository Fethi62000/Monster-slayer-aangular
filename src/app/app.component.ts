import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AttackbtnComponent } from './attackbtn/attackbtn.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AttackbtnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Monster-Slayer-angular';
}




