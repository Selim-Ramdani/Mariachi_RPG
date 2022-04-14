const players = [];
const Grace = new Fighter();
Grace.name = "Grace";
const Ulder = new Paladin();
Ulder.name = "Ulder";
const Moana = new Monk();
Moana.name = "Moana";
const Draven = new Berzerker();
Draven.name = "Draven";
const Carl = new Assassin();
Carl.name = "Carl";
players.push(Grace, Ulder, Moana, Draven, Carl);

const game = new Game();
game.watchStats(players);

while (game.turnsLeft > 0 && game.playersLeft(players).length > 1) {
  const turn = new Turn(game, players);
  turn.startTurn();
}

console.log(">>>> Voici le gagnant :");
game.playersLeft(players).forEach((player) => {
  console.log(player.name);
});
