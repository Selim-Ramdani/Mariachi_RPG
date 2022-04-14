class Berzerker extends Character {
  constructor(hp = 8, dmg = 4, mana = 0, status = "playing", name) {
    super(hp, dmg, mana, status, name);
  }

  specialAttack = (victim) => this.rage(victim);

  rage = (victim) => {
    const dmgBounty = 1;
    const hpPrice = 1;
    if (this.hp > hpPrice) {
      this.dmg += dmgBounty;
      this.hp -= hpPrice;
    } else {
      console.log("Vous n'avez pas assez d'HP pour cette attaque.");
    }
  };
}
