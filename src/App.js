const GameControl = require('./Controller.js');

class App {
  play() {
    let game = new GameControl();
    game.startGame();
  }
}

module.exports = App;


