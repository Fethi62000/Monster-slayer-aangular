import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-player-health-bar',
  standalone: true,
  imports: [],
  templateUrl: './player-health-bar.component.html',
  styleUrl: './player-health-bar.component.css'
})
export class PlayerHealthBarComponent {
constructor(private gameService: GameService){}

get playerHealthValue(): number{
  return this.gameService.playerHealthValue;
}
}
