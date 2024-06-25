const gridContainer = document.querySelector(".container");

function populateGrid(num) {
    let totalSquares = num * num;
    let percentOfRow = 100 / num;
    for (let i = 0; i <= totalSquares - 1; i++) {
        let square = document.createElement("div");
        square.setAttribute("class","square");
        square.style.cssText = `flex: 1 0 calc(${percentOfRow}% - 5px);`
        const squareContent = document.createElement("div");
        squareContent.setAttribute("class", "content")
        gridContainer.appendChild(square)
        square.appendChild(squareContent)
    }
    return null;
}

populateGrid(16);