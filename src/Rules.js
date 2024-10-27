export default class Rules {

    execute(cell) {
        this.cellDiesIfNeighborsAreLessThanTwo(cell)
        this.cellStaysAliveIfHasExactlyTwoNeighbors(cell)
        this.cellDiesIfNeighborsAreMoreThanThree(cell)
    }

    cellDiesIfNeighborsAreLessThanTwo(cell) {
        if(cell.isAlive && cell.numberOfAliveNeighbors < 2){
            cell.isAlive = false
       }
    }

    cellStaysAliveIfHasExactlyTwoNeighbors(cell) {
        if(cell.isAlive && cell.numberOfAliveNeighbors === 2 || cell.numberOfAliveNeighbors === 3){
            cell.isAlive = true
       }
    }
    
    cellDiesIfNeighborsAreMoreThanThree(cell) {
        if(cell.isAlive && cell.numberOfAliveNeighbors > 3){
             cell.isAlive = false
        }
    }

   cellBecomesAliveIfHasMoreThanThreeNeighbors(cell) {
        if(!cell.isAlive && cell.numberOfAliveNeighbors === 3){
             cell.isAlive = true
        }
    }
};
