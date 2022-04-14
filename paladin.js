class Paladin extends Character {
  constructor(hp = 16, dmg = 3, mana = 160, status = "playing", name) {
    super(hp, dmg, mana, status, name);
  }

  specialAttack = (victim) => this.healingLighting(victim);

  healingLighting = (victim) => {
    const specialDamage = 4;
    const manaPrice = 40;
    const specialHealing = 5;
    if (manaPrice <= this.mana) {
      victim.takeDamage(specialDamage);
      this.hp += specialHealing;
      this.mana -= manaPrice;
    } else {
      this.dealDamage(victim);
      console.log(
        "Mana insuffisant ! Vous pouvez uniquement lancer une attaque basique."
      );
    }
  };
}
