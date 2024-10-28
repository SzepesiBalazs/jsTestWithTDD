import Cell from "./Cell";

export default class Game {
  constructor(numberOfAliveCells = 0, cells = []) {
    this.numberOfAliveCells = numberOfAliveCells;
    this.cells = cells;
  }

  setup(numberOfCells = 0) {
    try {
      this.cellGenerator(numberOfCells);
      if (this.numberOfAliveCells < 3) {
        throw new Error();
      }
    } catch (err) {
      throw new Error("There are less then three alive cells!");
    }
  }

  cellGenerator(numberOfCells) {
    for (let index = 0; index < numberOfCells; index++) {
      this.cells.push(new Cell());
    }
    this.numberOfAliveCells = this.cells.length;
    
  }
}
