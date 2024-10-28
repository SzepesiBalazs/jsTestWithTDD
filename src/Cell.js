export default class Cell {
  constructor(isAlive = true, numberOfAliveNeighbors = 0, x = 0, y = 0) {
    this.isAlive = isAlive;
    this.numberOfAliveNeighbors = numberOfAliveNeighbors;
    this.x = x
    this.y = y
  }
}
