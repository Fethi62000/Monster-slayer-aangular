import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AttackbtnComponent } from './attackbtn/attackbtn.component';
import { MonsterHealthBarComponent } from './monster-health-bar/monster-health-bar.component';
import { SpecialAttackComponent } from './special-attack/special-attack.component';
import { HealbtnComponent } from './healbtn/healbtn.component';
import { PlayerHealthBarComponent } from './player-health-bar/player-health-bar.component';
import { GiveUpbtnComponent } from './give-upbtn/give-upbtn.component';
import { OneshotComponent } from './oneshot/oneshot.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AttackbtnComponent, MonsterHealthBarComponent, SpecialAttackComponent, HealbtnComponent, PlayerHealthBarComponent, GiveUpbtnComponent, OneshotComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Monster-Slayer-angular';
}