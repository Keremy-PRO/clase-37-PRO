class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  start() {
    player = new Player();// objeto de tipo jugador
    playerCount = player.getCount();//jugador.obtencotador

    form = new Form();// objeto de tipo formulario
    form.display();// objeto.pintate
  }
}
