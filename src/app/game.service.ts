import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private monsterHealth: number = 100;

  get monsterHealthValue(): number {
    return this.monsterHealth;
  }
  attack() {
    let playerDamage = Math.floor(Math.random() * 10 + 1);
    this.monsterHealth -= playerDamage;
  }

  constructor() { }
}
