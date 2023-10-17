const drawer = document.querySelector('#drawer');
let currentSize = 16;
let mouseDown = false;
document.body.onmousedown = function () {
    mouseDown = true;
}
document.body.onmouseup = function () {
    mouseDown = false;
}
let colorPicker = document.getElementById('colorPicker');
let colorMode = 'color'
let rainbowBtn = document.getElementById('rainbowBtn');
let colorBtn = document.getElementById('colorBtn');
let eraserBtn = document.getElementById('eraserBtn');
let clearBtn = document.getElementById('clearBtn');
let check16 = document.getElementById('16');
let check32 = document.getElementById('32');
let check64 = document.getElementById('64');

function createGrid() {
    console.log(currentSize);
    drawer.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`
    drawer.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`
    for (let i = 0; i < currentSize * currentSize; i += 1) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.style.backgroundColor = 'white';
        grid.draggable = '';
        grid.addEventListener('mouseover', changeColor);
        grid.addEventListener('mousedown', changeColor);
        drawer.appendChild(grid);
    }
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    if (colorMode === 'color') {
     e.target.style.backgroundColor = colorPicker.value;
    } else if (colorMode === 'rainbow') {
     const randomR = Math.floor(Math.random() * 256)
     const randomG = Math.floor(Math.random() * 256)
     const randomB = Math.floor(Math.random() * 256)
     e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (colorMode === 'eraser') {
     e.target.style.backgroundColor = 'white';
    }
 }

rainbowBtn.onclick = function() {
    colorMode = 'rainbow';
}

colorBtn.onclick = function() {
    colorMode = 'color';
}

eraserBtn.onclick = function() {
    colorMode = 'eraser';
}

clearBtn.onclick = function() {
 drawer.innerHTML = '';
 createGrid();
}

check16.onclick = function() {
    currentSize = 16;
}

check32.onclick = function() {
    currentSize = 32;
}

check64.onclick = function() {
    currentSize = 64;
}

createGrid();