import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-special-attack',
  standalone: true,
  imports: [],
  templateUrl: './special-attack.component.html',
  styleUrl: './special-attack.component.css'
})
export class SpecialAttackComponent {

    constructor (private gameService: GameService){}

    specialAttack(){
      this.gameService.SpecialAttack();
    }
}