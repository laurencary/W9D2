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
        box.setAttribute("data-pos", [row, col]);
        grid.appendChild(box);
        
      };
     
    };
    return grid;
  };
  
  handleClick(e) {
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;