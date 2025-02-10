class Cell {
  constructor(cellData) {
    this.color = cellData.color;
    this.context = cellData.context;

    this.x = cellData.x;
    this.y = cellData.y;
    this.cellSize = this.context.canvas.width / cellData.cellPerLine;

    this.Xinicial = cellData.x * this.cellSize;
    this.Yinicial = cellData.y * this.cellSize;
    this.Xfinal = (cellData.x * this.cellSize) + this.cellSize;
    this.Yfinal = (cellData.y * this.cellSize) + this.cellSize;

    this.value = cellData.value;
  }

  fill() {
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.fillRect(this.Xinicial, this.Yinicial, this.cellSize, this.cellSize);
    this.context.strokeRect(this.Xinicial, this.Yinicial, this.cellSize, this.cellSize);
    this.context.closePath();
  }

  info() { console.log(this); }
}

class Board {
  constructor(boardSize, boardColor, cellColor) {
    this.boardCanvas = document.getElementById('boardCanvas');
    this.boardContext = boardCanvas.getContext('2d');
    this.cellMatrix = this.createMatrix(boardSize, boardSize);
    this.cellPerLine = boardSize;
    this.cellColor = cellColor;
    this.boardColor = boardColor;
    this.create();
  }

  create() {
    this.cellMatrix.forEach((line, lineIndex) => {
      this.cellMatrix.forEach((column, columnIndex) => {
        const cellData = {
          x: lineIndex,
          y: columnIndex,
          context: this.boardContext,
          cellPerLine: this.cellPerLine,
          color: this.boardColor,
        };
        const currentCell = new Cell(cellData);
        this.cellMatrix[lineIndex][columnIndex] = currentCell;
        currentCell.fill();
      });
    });
  }

  /**
   * 
   * @param {number} x X coordinate 
   * @param {number} y Y coordinate
   * @returns void, prints cell on Canvas
   */
  fillCell(x, y) {
    if (x < 0 || x > this.cellMatrix.length || y < 0 || y > this.cellMatrix.length) {
      return alert('Valores inválidos para X e Y.');
    }
    
    if (this.cellMatrix[x][Math.abs(this.cellMatrix.length - y)-1].value !== 1) {
      const cellData = {
        x: x,
        y: Math.abs(this.cellMatrix.length - y) - 1,
        context: this.boardContext,
        cellPerLine: this.cellPerLine,
        color: this.cellColor,
        value: 1
      };
      
      const newCell = new Cell(cellData);
      newCell.fill();
      this.cellMatrix[x][Math.abs(this.cellMatrix.length - y) - 1] = newCell;
      console.log('ok', this.cellMatrix, newCell);
    } else { console.log('repetido', this.cellMatrix); }
  }

  createMatrix(row, col) {
    let matrix = [];
    for (let i = 0; i < row; i++) {
      matrix.push([]);
      for (let j = 0; j < col; j++) {
        matrix[i].push(0);
      }
    }
    return matrix;
  }
  
  info() { console.log(this) }
}

module.exports = {Board};