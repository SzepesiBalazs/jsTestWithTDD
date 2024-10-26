import Rules from "../src/Rules";
import Cell from "../src/Cell";

describe("Rules", () => {
  test("should return live cell on initialization", () => {
    const rules = new Rules();
    const cell = new Cell();

    expect(cell.isAlive).toBe(true);
  });
  
  test("should live cell die when it has only 1 live neighbor", () => {
    const rules = new Rules();
    const cell = new Cell();

    cell.numberOfAliveNeighbors = 1;
    rules.execute(cell);

    expect(cell.isAlive).toBe(false);
  });
});
