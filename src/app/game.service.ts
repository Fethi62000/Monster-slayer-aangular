import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private playerHealth: number = 100;
  private monsterHealth: number = 100;

  get playerHealthValue(): number {
    return this.playerHealth;
  }
  get monsterHealthValue(): number {
    return this.monsterHealth;
  }

  resetGame() {
    this.playerHealth = 100;
    this.monsterHealth = 100;
    this.updateHealthBars();
  }

  updateHealthBars() {
    const monsterHealthBar = document.getElementById('monsterHealthBar') as HTMLDivElement;
    monsterHealthBar.style.width = `${this.monsterHealth}%`;
  }

  attack() {

    let playerDamage = Math.floor(Math.random() * 10 + 1);
    this.monsterHealth -= playerDamage;

    if (this.monsterHealth <= 0) {
      this.monsterHealth = 0;
      alert("You Win!");
      this.resetGame();
    }
    this.updateHealthBars();
  }



  SpecialAttack() {

    let platerDamage = Math.floor(Math.random() * 30 + 10);
    this.monsterHealth -= platerDamage;

    if (this.monsterHealth <= 0) {
      this.monsterHealth = 0;
      alert("You win!");
      this.resetGame();
    }

    this.updateHealthBars();


  }

  heal() {
    let healAmout = Math.floor(Math.random() * 20) + 10;
    this.playerHealth += healAmout;
    if (this.playerHealth > 100) {
      this.playerHealth = 100;
    }
    this.updateHealthBars
  }


}
