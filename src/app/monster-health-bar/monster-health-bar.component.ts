import { Component } from '@angular/core';
import { GameService } from '../game.service';


@Component({
  selector: 'app-monster-health-bar',
  standalone: true,
  imports: [],
  templateUrl: './monster-health-bar.component.html',
  styleUrl: './monster-health-bar.component.css'
})

export class MonsterHealthBarComponent {

  constructor(private gameService: GameService) { }

  get monsterHealthValue(): number {
    return this.gameService.monsterHealthValue;
  }
  
}


