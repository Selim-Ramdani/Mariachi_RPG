class Fighter extends Character {
  constructor(hp = 12, dmg = 4, mana = 40, status = "playing", name) {
    super(hp, dmg, mana, status, name);
  }

  specialAttack = (victim) => this.darkVision(victim);

  darkVision = (victim) => {
    const specialDamage = 5;
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
