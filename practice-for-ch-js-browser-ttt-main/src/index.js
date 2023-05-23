// Add your import statements for View and Game here
import View from './ttt-view.js';
import Game from '../ttt_node/game.js';

// window.game = Game;

document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector('.ttt');
  
  const game = new Game();
  const view = new View(game, el);
  
  el.addEventListener("click", view.handleClick.bind(view));
});