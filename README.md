# **Canvas Grid Mapper**  

**Canvas Grid Mapper** is a lightweight and efficient JavaScript library that abstracts an HTML5 canvas into a customizable, coordinate-based grid system. Designed for developers who need precise control over grid-based visualizations, this package enables effortless coloring of individual grid cells using Cartesian (x, y) coordinates.  

Whether you're building interactive pixel art tools, game maps, or data visualizations, **Canvas Grid Mapper** provides a seamless and intuitive API for rendering structured grids. 

## ✨ **Features**  

- 🖌 **Coordinate-Based Coloring** – Easily paint cells using Cartesian (x, y) positions.  
- 📐 **Custom Grid Dimensions** – Define grid size, cell spacing, and styling.  
- 🎨 **Efficient Rendering** – Optimized canvas drawing for smooth performance.  
- 🛠 **Simple API** – Designed for clarity and ease of use.  

## NPM

  https://www.npmjs.com/package/canvas-grid-mapper

## Importing

### Canvas Element

Your page should contain a ``<canvas>`` HTML tag with ``id=boardCanvas``.

### Implement

```
import { Board } from 'canvas-grid-mapper';

const customCanvasGrid = new Board('40', 'white', 'blue');

customCanvasGrid.fillCell(20, 20);
customCanvasGrid.info();
```