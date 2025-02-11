import {Board} from "canvas-grid-mapper";

const c = new Board(20, 'white', 'blue');

c.info();
c.fillCell(0, 0);
c.fillCell(19, 19);
c.fillCell(18, 18);