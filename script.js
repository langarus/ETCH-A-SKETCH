const getBody = document.getElementById("main-container");
let numColsRows;



function changeSize() {
    let x = prompt("Enter a num");

//THIS IS WHERE I'M LEFT
    if (x < 1 || x > 100){
        changeSize();
    }else {numColsRows = parseInt(x)}

    // numColsRows = parseInt(prompt("Enter a number"));
    deleteGrid();

    creatTable(numColsRows);
    // resetFunc();
}

function creatTable(numColsRows = 60){
// resetFunc();
//will create new row
for (let i = 0; i < numColsRows; i++){
    let divElement = document.createElement('div');
    divElement.setAttribute('class', 'flex-container1');
    //will create six boxes in each row
    for (let j = 0; j < numColsRows; j++){
        let divChild = document.createElement('div');
        // divChild.textContent = `${j+1}`
        divChild.setAttribute("class", "box")

        divElement.append(divChild);
        divChild.onmouseover = function(){
            divChild.style.backgroundColor = "lightblue"
        
        };
    }
    divElement.setAttribute("class", "flex-container");
    getBody.append(divElement);

}
}

function resetFunc (){
    const blabla = document.getElementsByClassName("box");
    for (let i = 0; i < blabla.length; i++){
        blabla[i].style.backgroundColor = "white"
    }

};

function deleteGrid(){
    let allBoxes = document.getElementById('main-container');
    let toDelete = document.getElementsByClassName("flex-container");
    while(toDelete[0]){
        let throwNode = allBoxes.removeChild(toDelete[0])

    }


}


    // divElement.setAttribute("class", "flex-container");
    // getBody.append(divElement);



creatTable();
