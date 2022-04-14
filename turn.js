class Turn {
  constructor(game, players) {
    this.game = game;
    this.players = players;
  }

  startTurn = () => {
    game.newTurn();
    console.log(`C'est le tour n° ${10 - game.turnsLeft} ! `);

    const playersLeft = game.playersLeft(players);
    playersLeft.forEach((player) => {
      if (player.status === "loser") return;
      const victimName = prompt(
        `${player.name}, quel joueur voulez-vous attaquer ?`
      );
      console.log(`${player.name} veut attaquer ${victimName}`);
      const victim = players.find((player) => player.name === victimName);
      const attackVariety = prompt(
        "Quel attaque souhaitez-vous lancer ? (B) - Attaque Basique, (S) - Attaque spéciale "
      );

      console.log(
        `${victim.name} a ${victim.hp} point(s) de vie avant l'attaque.`
      );
      if (attackVariety === "B") {
        player.dealDamage(victim);
      } else if (attackVariety === "S") {
        player.specialAttack(victim);
      }
      console.log(
        `${victim.name} a ${victim.hp} point(s) de vie après l'attaque.`
      );
      game.watchStats(players);
    });
  };
}
