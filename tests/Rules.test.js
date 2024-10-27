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

  test("should only stay alive when it has exactly 2 neighbors", () => {
    const rules = new Rules();
    const cell = new Cell();

    cell.numberOfAliveNeighbors = 2
    rules.execute(cell);

    expect(cell.isAlive).toBe(true);
  });

  test("should only stay alive when it has exactly 3 neighbors", () => {
    const rules = new Rules();
    const cell = new Cell();

    cell.numberOfAliveNeighbors = 3
    rules.execute(cell);

    expect(cell.isAlive).toBe(true);
  });

  test("should live cell die when it has less than 3 neighbors", () => {
    const rules = new Rules();
    const cell = new Cell();

    cell.numberOfAliveNeighbors = 4;
    rules.execute(cell);

    expect(cell.isAlive).toBe(false);
  });

  test("should dead cell live when it has exactly 3 live neighbors", () => {
    const rules = new Rules();
    const cell = new Cell();

    cell.isAlive = false
    cell.numberOfAliveNeighbors = 3;
    rules.execute(cell);

    expect(cell.isAlive).toBe(true);
  });
}); 
