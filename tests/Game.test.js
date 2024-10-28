import Cell from "../src/Cell";
import Game from "../src/Game";

describe("Game", () => {
  test("should have more than three cell on initialization", () => {
    const game = new Game();

    game.setup(4);

    expect(game.numberOfAliveCells).toBeGreaterThan(3);
  });

  test("should throw error if alive cells are less than three on initialization", () => {
    const game = new Game();

    expect(() => {
      game.setup();
    }).toThrow();
  });

  test("grid should not have any live cells on initialization", () => {
    const game = new Game();

    game.generateGrid();

    expect(game.cells.length).toEqual(0);
  });

  test("grid should have exactly one live cell on initialization", () => {
    const game = new Game();

    game.generateGrid(1);

    expect(game.cells.length).toEqual(1);
  });

  test("grid should have one live cell at the position x=1, y=1", () => {
    const game = new Game();

    game.generateGrid(1);
    const cell = game.getCellByPosition(1, 1);

    expect(cell.isAlive).toBe(true);
  });
});
