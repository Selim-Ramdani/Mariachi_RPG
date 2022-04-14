class Game {
  constructor(turnsLeft = 10) {
    this.turnsLeft = turnsLeft;
  }

  newTurn = () => {
    this.turnsLeft -= 1;
    if (this.turnsLeft === 0) 
    console.log("C'est le dernier tour !");
  };

  watchStats = (players) => {
    players.forEach((player) => {
      console.log(`
      Joueur ${player.name} : ${player.constructor.name} (statut : ${player.status})
      Points de vie : ${player.hp} 
      Puissance : ${player.dmg} 
      Mana : ${player.mana}
      `);
    });
  };

  playersLeft = (players) => {
    const playersLeft = [];
    players.forEach((player) => {
      if (player.status === "playing") playersLeft.push(player);
    });
    return playersLeft;
  };
}
