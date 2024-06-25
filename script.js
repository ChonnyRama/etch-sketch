const gridContainer = document.querySelector(".container");
const userInput = document.getElementById('userInput');
let opacity = 0;

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + opacity.toFixed(1) + ')';
}

function deleteOldGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

function colorHovered(element) {
    element.addEventListener("mouseenter", (event) => {
        event.target.style.background = random_rgba();
        opacity = opacity + .1;
})
}

function populateGrid(num) {
    let totalSquares = num * num;
    let percentOfRow = 100 / num;
    for (let i = 0; i <= totalSquares - 1; i++) {
        let square = document.createElement("div");
        
        square.setAttribute("class","square");
        square.style.cssText = `flex: 1 0 calc(${percentOfRow}% - 5px);`
        
        const squareContent = document.createElement("div");
        squareContent.setAttribute("class", "content")
                
        gridContainer.appendChild(square);
        square.appendChild(squareContent);

        colorHovered(square);
    }
    return null;
}

userInput.addEventListener("keydown",(event) => {
    if (event.key == 'Enter') {
        if (userInput.value < 100) {
            deleteOldGrid()
            populateGrid(userInput.value);
        }
          
    }
})