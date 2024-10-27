export default class Cell {
  constructor(isAlive = true, numberOfAliveNeighbors = 0) {
    this.isAlive = isAlive;
    this.numberOfAliveNeighbors = numberOfAliveNeighbors;
  }
}
