export default class Rules {

    execute(cell) {
        if(cell.isAlive && cell.numberOfLiveNeighbors < 2){
             cell.isAlive = false
        }
    }
};
