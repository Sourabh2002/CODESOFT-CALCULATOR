let userInput = document.getElementById('calculatorBox');
let buttons = document.querySelectorAll('button');

let stringData = "";
let array = Array.from(buttons);
array.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            stringData = eval(stringData);
            userInput.value = stringData;
        }
        else if(e.target.innerHTML == 'AC'){
            stringData = "";
            userInput.value = stringData;
        }
        else if(e.target.innerHTML == 'DEL'){
            stringData = stringData.substring(0, stringData.length-1);
            userInput.value = stringData;
        }
        else{
            stringData += e.target.innerHTML;
            userInput.value = stringData;
        }
    })
})