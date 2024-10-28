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
});
