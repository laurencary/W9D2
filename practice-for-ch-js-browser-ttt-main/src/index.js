// Add your import statements for View and Game here
import View from './ttt-view';
import Game from './game.js';

document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector('.ttt');
  
  const game = new Game();
  const view = new View(game, el);

  
});