
let serial =0;

// this function for input value

function getData (value1ID, value2ID){

    getNewColor ()

    const value1Text = document.getElementById(value1ID);
    value1 = value1Text.value;
    value1Text.value = '';


    const value2Text = document.getElementById(value2ID);
    value2 = value2Text.value;
    value2Text.value = '';

    return value1, value2;

}

// this function for show table data
function showData(displyName, valueCalculate){
    serial+=1;
    const tableContainer =document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${displyName}</td>
    <td>${valueCalculate}</td>
    <td><button class="btn btn-primary bg-sky-500 w-34 mt-4">Covert to m&#178;</button></td>
    `
    tableContainer.appendChild(tr);
};


// this is rendon color genateor
const cards = document.getElementsByClassName('card');

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('mouseover', function() {
    this.style.backgroundColor = getNewColor();
  });

  cards[i].addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
  });
}

function getNewColor (){
    const symbols = '0123456789ABCDEF';

    let color = '#';
    for(let i = 0 ; i<6; i++){
        color += symbols[Math.floor(Math.random() * 16)];
    }
    return color;
}