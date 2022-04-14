class Assassin extends Character {
  constructor(hp = 6, dmg = 6, mana = 20, status = "playing", name) {
    super(hp, dmg, mana, status, name);
  }

  specialAttack = (victim) => this.shadowHit(victim);

  shadowHit = (victim) => {
    const specialDamage = 7;
    const manaPrice = 20;
    if (manaPrice <= this.mana) {
      victim.takeDamage(specialDamage);
      this.mana -= manaPrice;
    } else {
      this.dealDamage(victim);
      console.log(
        "Mana insuffisant ! Vous pouvez uniquement lancer une attaque basique."
      );
    }
  };
}
