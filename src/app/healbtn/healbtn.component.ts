import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-healbtn',
  standalone: true,
  imports: [],
  templateUrl: './healbtn.component.html',
  styleUrl: './healbtn.component.css'
})


export class HealbtnComponent {
  constructor(private gameService: GameService){}
  heal(){
    this.gameService.heal();
  }
}