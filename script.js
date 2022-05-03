let btnAJouterLigne = document.querySelector('#btnAJouterLigne');
let btnDeleteLastLine = document.querySelector('#btnDeleteLastLine')
let tbody = document.querySelector('.tbody');


let lign = document.querySelector('#tableau');
let lastLine = document.querySelector('#lastLine');
let btnEmptyInputs = document.querySelector('#btnEmptyInputs');
function createNewLign(){
    // clone lign
    let newLign = lign.cloneNode(true);
    // add to table
    tbody.appendChild(newLign);
}
function RemoveLastLigne() {
    tbody.deleteRow(-1);
}

btnAJouterLigne.addEventListener('click', function(){
    createNewLign();
});

btnDeleteLastLine.addEventListener('click', function(){
    RemoveLastLigne();
});

btnEmptyInputs.addEventListener('click', function(){
    // empty all inputs from the page
    let inputs = document.querySelectorAll('input');
    inputs.forEach(function(input){
        input.value = '';
    });
})


function calculTVAligne(e){
    //calculate tva from this line only
    let ligne = e.parentNode.parentNode;
    let input = ligne.querySelector('.inputht');
    let prixHT = parseFloat(input.value);

    let inputTVA = ligne.querySelector('.inputtva');
    let tva = parseFloat(inputTVA.value);
    
    let inputTTC = ligne.querySelector('.inputttc');
    let prixTTC = (prixHT * tva)/100;
    console.log(prixTTC);
    inputTTC.value = parseFloat(input.value) + prixTTC;
    calculTotal();
}

function emptyInputsLigne(e){
    // empty all input from this line
    let ligne = e.target.parentNode.parentNode;
   return  console.log(ligne)
    let inputs = e.target.parentNode.querySelectorAll('input');
    inputs.forEach(function(input){
        input.value = '';
    });
}

function deleteLigne(objet){
    
    objet.parentNode.parentNode.remove();
}


function calculTotal(){
    let inputTotal = document.querySelector('#inputTotal');
    // calculate total from all lines
    let inputs = document.querySelectorAll('.inputttc');
    let total = 0;
    inputs.forEach(function(input){
        total += parseFloat(input.value);
        inputTotal.value = total;
    });
    
}