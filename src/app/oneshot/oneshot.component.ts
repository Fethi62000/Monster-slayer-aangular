import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-oneshot',
  standalone: true,
  imports: [],
  templateUrl: './oneshot.component.html',
  styleUrl: './oneshot.component.css'
})
export class OneshotComponent {

constructor(private gameService: GameService ){}

oneshot() {
  this.gameService.oneshot();
}

}
