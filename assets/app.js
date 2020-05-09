const outputEl = document.getElementById('output');
const lengthEl = document.getElementById('length');
const generateEl = document.getElementById('generate');
const numbersEl = document.getElementById('numbers');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const symbolsEl = document.getElementById('symbols');

// character list organized by checkbox
let num = "0123456789";
let sym = "!@#$%^&*()_-+=[];:./?";
let uc = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lc = "qwertyuiopasdfghjklzxcvbnm";

// default refresh is all boxes checked
generate.addEventListener("click", () => {
   const hasNumbers = numbersEl.checked;
   const hasUppercase = uppercaseEl.checked;
   const hasLowercase = lowercaseEl.checked;
   const hasSymbols = symbolsEl.checked;
   const length = +lengthEl.value;

    outputEl.innerText = generatePassword(hasNumbers, hasUppercase, hasLowercase, hasSymbols, length);
});

// loop will apply checked boxes list of characters until string length input is met
function generatePassword(numbers, uppercase, lowercase, symbol, length) {
    let generatedArray = [];
    for(let counter = 0; counter < length; counter++){
        let genLc = generatedLowercase();
        let genUc = generatedUppercase();
        let genNum = generatedNumbers();
        let genSym = generatedSymbols();
        
        // to change output combination relating to checkboxes (using !example as false)
        if(lowercase && uppercase && numbers && symbol){
            let genAll = [genLc, genUc, genNum, genSym]
            console.log(genAll[Math.floor(Math.random() * genAll.length)])
            generatedArray.push(genAll[Math.floor(Math.random() * genAll.length)])
        }
        if(lowercase && uppercase && numbers && !symbol){
            let genAll = [genLc, genUc, genNum]
            console.log(genAll[Math.floor(Math.random() * genAll.length)])
            generatedArray.push(genAll[Math.floor(Math.random() * genAll.length)])
        }
        if(lowercase && uppercase && !numbers && symbol){
            let genAll = [genLc, genUc, genSym]
            console.log(genAll[Math.floor(Math.random() * genAll.length)])
            generatedArray.push(genAll[Math.floor(Math.random() * genAll.length)])
        }
        if(lowercase && !uppercase && numbers && symbol){
            let genAll = [genLc, genNum, genSym]
            console.log(genAll[Math.floor(Math.random() * genAll.length)])
            generatedArray.push(genAll[Math.floor(Math.random() * genAll.length)])
        }
        if(!lowercase && uppercase && numbers && symbol){
            let genAll = [genUc, genNum, genSym]
            console.log(genAll[Math.floor(Math.random() * genAll.length)])
            generatedArray.push(genAll[Math.floor(Math.random() * genAll.length)])
        }
        if(lowercase && uppercase && !numbers && !symbol){
            let genAll = [genLc, genUc]
            console.log(genAll[Math.floor(Math.random() * genAll.length)])
            generatedArray.push(genAll[Math.floor(Math.random() * genAll.length)])
        }
        if(lowercase && !uppercase && !numbers && symbol){
            let genAll = [genLc, genSym]
            console.log(genAll[Math.floor(Math.random() * genAll.length)])
            generatedArray.push(genAll[Math.floor(Math.random() * genAll.length)])
        }
        if(!lowercase && !uppercase && numbers && symbol){
            let genAll = [genNum, genSym]
            console.log(genAll[Math.floor(Math.random() * genAll.length)])
            generatedArray.push(genAll[Math.floor(Math.random() * genAll.length)])
        }
        if(!lowercase && !uppercase && !numbers && symbol){
            let genAll = [genSym]
            console.log(genAll[Math.floor(Math.random() * genAll.length)])
            generatedArray.push(genAll[Math.floor(Math.random() * genAll.length)])
        }
        if(!lowercase && !uppercase && numbers && !symbol){
            let genAll = [genNum]
            console.log(genAll[Math.floor(Math.random() * genAll.length)])
            generatedArray.push(genAll[Math.floor(Math.random() * genAll.length)])
        }
        if(!lowercase && uppercase && !numbers && !symbol){
            let genAll = [genUc]
            console.log(genAll[Math.floor(Math.random() * genAll.length)])
            generatedArray.push(genAll[Math.floor(Math.random() * genAll.length)])
        }
        if(lowercase && !uppercase && !numbers && !symbol){
            let genAll = [genLc]
            console.log(genAll[Math.floor(Math.random() * genAll.length)])
            generatedArray.push(genAll[Math.floor(Math.random() * genAll.length)])
        }
        if(!lowercase && !uppercase && !numbers && !symbol){
            let genAll = []
            console.log(genAll[Math.floor(Math.random() * genAll.length)])
            generatedArray.push(genAll[Math.floor(Math.random() * genAll.length)])
        }
    }

    // removes array commas and spaces
    return generatedArray.join("");
}

function generatedLowercase() {
    var lcArray = lc.split("");
    return lcArray[Math.floor(Math.random() * lcArray.length)];
}

function generatedUppercase() {
    var ucArray = uc.split("");
    return ucArray[Math.floor(Math.random() * ucArray.length)];
}

function generatedNumbers() {
    var numArray = num.split("");
    return numArray[Math.floor(Math.random() * numArray.length)];
}

function generatedSymbols() {
    var symArray = sym.split("");
    return symArray[Math.floor(Math.random() * symArray.length)];
}