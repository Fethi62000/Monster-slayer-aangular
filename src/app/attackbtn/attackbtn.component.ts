import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-attackbtn',
  standalone: true,
  imports: [],
  templateUrl: './attackbtn.component.html',
  styleUrl: './attackbtn.component.css'
})

export class AttackbtnComponent {
  constructor(private gameService: GameService) { }
  monsterHealth: number = 100;
  updateHealthBars() {
    const monsterHealthBar = document.getElementById('monsterHealthBar') as HTMLDivElement;
    monsterHealthBar.style.width = `${this.monsterHealth}%`;

  }
}


