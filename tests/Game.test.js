import Cell from "../src/Cell";
import Game from "../src/Game";

describe("Game", () => {
  test("should have more than three cell on initialization", () => {
    const game = new Game();

    game.setup()

    expect(game.numberOfAliveCells).toBeGreaterThan(3)
  });
});
