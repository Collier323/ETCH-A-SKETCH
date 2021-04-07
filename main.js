// Add forms to get x & y #'s. 
// Adjust grid size based on number of grids chosen 
// CSS
function buildGrid(x, y, cellSize, gridElement) {
  gridElement.style.display = 'grid';
  gridElement.style.gridTemplateColumns =  `repeat(${x}, ${cellSize}px)`;
  gridElement.style.gridTemplateRows =  `repeat(${y}, ${cellSize}px)`;
  
  let squares = new DocumentFragment() 
  
  for (let i = 0; i < x * y; i++) {
    let square = document.createElement('div');
    square.className = 'square';
    square.id = 'square';
    squares.appendChild(square);
  }
  gridElement.appendChild(squares);
}

buildGrid(30, 30, 25, document.getElementById('wrapper'));


for (i=0; i < 900; i++) {
  document.getElementsByClassName('square')[i].addEventListener('mouseover', e => {
    e.target.style.backgroundColor = getRandomRgb();
  })
}

function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = num >> 8 & 255;
  var b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}
/*
let clearGrid = document.getElementById('clearGrid');
clearGrid.addEventListener('click', (e) => {
  alert('hello')
});
*/

//Clear Grid
let clearGrid = document.getElementById('clearGrid');
clearGrid.addEventListener('click', (e) => {
    location.reload();
});
