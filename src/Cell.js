export default class Cell {
  constructor(isAlive = true, numberOfLiveNeighbors = 0) {
    this.isAlive = isAlive;
    this.numberOfLiveNeighbors = numberOfLiveNeighbors;
  }
}
