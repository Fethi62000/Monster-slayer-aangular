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
    const playerHealthBar = document.getElementById('playerHealthBar') as HTMLDivElement;
    const monsterHealthBar = document.getElementById('monsterHealthBar') as HTMLDivElement;
    playerHealthBar.style.width = `${this.playerHealth}%`;
    monsterHealthBar.style.width = `${this.monsterHealth}%`;
  }

  monsterAttack() {
    let monsterDamage = Math.floor(Math.random() * 15 ) + 5;
    this.playerHealth -= monsterDamage;
    if (this.playerHealth <= 0) {
      this.playerHealth = 0;
      alert("You loos!")
      this.resetGame();
    }
    this.updateHealthBars();
  }

  attack() {

    let playerDamage = Math.floor(Math.random() * 10 ) + 1;
    this.monsterHealth -= playerDamage;

    if (this.monsterHealth <= 0) {
      this.monsterHealth = 0;
      alert("You Win!");
      this.resetGame();
    }
    this.updateHealthBars();
    this.monsterAttack();

  }



  SpecialAttack() {

    let playerDamage = Math.floor(Math.random() * 30 )+ 10;
    this.monsterHealth -= playerDamage;

    if (this.monsterHealth <= 0) {
      this.monsterHealth = 0;
      alert("You win!");
      this.resetGame();
    }

    this.updateHealthBars();
    this.monsterAttack();

  }

  heal() {
    let healAmout = Math.floor(Math.random() * 20) + 10;
    this.playerHealth += healAmout;
    if (this.playerHealth > 100) {
      this.playerHealth = 100;
    }
    this.updateHealthBars();
  }


}




