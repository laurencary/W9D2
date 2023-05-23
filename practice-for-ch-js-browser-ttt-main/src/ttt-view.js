class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.set = this.setupBoard();
    console.log(this.set)
    this.el.appendChild(this.set);
  }
  
  setupBoard() {
    let grid = document.createElement('ul');
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        let box = document.createElement('li');
        box.setAttribute("data-pos", `[${row}, ${col}]`);
        grid.appendChild(box);
        
      };
    };
    return grid;
  };
  
  handleClick(e) {
    let pos = e.target.getAttribute('data-pos');
    pos = JSON.parse(pos)
    this.game.playMove(pos);
    const mark = this.game.currentPlayer;
    console.log(mark);
    e.target.innerText = mark;
    e.target.classList.add("marked");
    this.handleGameOver();
  }

  makeMove(square) {
  }
  
  handleGameOver() {
    if (this.game.winner()) {
      const gameOver = document.querySelector(".game-over");
      gameOver.innerText = `You won, ${this.game.currentPlayer}!`

      const li = document.querySelector('li');
      if (li.value === this.game.winner()) {
        li.target.classList.add('winner-mark');
      }
    }
    ;
    
  }
}

export default View;