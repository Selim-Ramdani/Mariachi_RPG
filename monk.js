class Monk extends Character {
  constructor(hp = 8, dmg = 2, mana = 200, status = "playing", name) {
    super(hp, dmg, mana, status, name);
  }

  specialAttack = (victim) => this.heal(victim);

  heal = () => {
    const manaPrice = 25;
    const specialHealing = 8;
    if (manaPrice <= this.mana) {
      this.hp += specialHealing;
      this.mana -= manaPrice;
    } else {
      console.log("Mana insuffisant !");
    }
  };
}
