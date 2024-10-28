import Cell from "./Cell";

export default class Game {
  constructor(numberOfAliveCells = 0, cells = [], grid = []) {
    this.numberOfAliveCells = numberOfAliveCells;
    this.cells = cells;
    this.grid = grid;
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

  generateGrid(numberOfCells = 0) {
    this.cellGenerator(numberOfCells);
    let localGrid = [];

    for (let xCoordinate = 0; xCoordinate < 4; xCoordinate++) {
      localGrid[xCoordinate] = [];

      for (let yCoordinate = 0; yCoordinate < 4; yCoordinate++) {
        localGrid[xCoordinate][yCoordinate] = new Cell();
      }
    }
    this.grid = localGrid;
  }

  getCellByPosition(xCoordinate, yCoordinate) {
    return this.grid[xCoordinate][yCoordinate];
  }
}
