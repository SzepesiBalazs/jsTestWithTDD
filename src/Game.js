export default class Game {
  constructor(numberOfAliveCells = 0) {
    this.numberOfAliveCells = numberOfAliveCells;
  }
  
  setup(){
    this.numberOfAliveCells = 4
  }
}
