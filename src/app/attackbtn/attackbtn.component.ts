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

  attack() {
    this.gameService.attack();
  }

  attackIconPatch = 'src/assets/attack.png'
}