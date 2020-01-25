const getBody = document.body;

//will create new row
for (let i = 0; i < 6; i++){
    let divElement = document.createElement('div');
    divElement.setAttribute('class', 'flex-container1');
    //will create six boxes in each row
    for (let j = 0; j < 6; j++){
        let divChild = document.createElement('div');
        divChild.textContent = `${j+1}`
        divElement.append(divChild);
    }
    
    divElement.setAttribute("class", "flex-container");
    getBody.append(divElement);

}


