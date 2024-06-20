import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-give-upbtn',
  standalone: true,
  imports: [],
  templateUrl: './give-upbtn.component.html',
  styleUrl: './give-upbtn.component.css'
})
export class GiveUpbtnComponent {
constructor(private gameService: GameService){}
GiveUp(){
  this.gameService.GiveUp();
}

}
