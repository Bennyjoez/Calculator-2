//select all operators
let allClear = document.querySelector('#clear');
let deleteBtn = document.querySelector('#delete');
let multiplicationBtn = document.querySelector('#multiply');
let divideBtn = document.querySelector('#divide');
let additionBtn = document.querySelector('#add');
let equalsBtn = document.querySelector('#equals');
let periodBtn = document.querySelector('#period');


//selecting the output displays
let previousDisplay = document.querySelector('#previous');
let currentDisplay = document.querySelector('#current');



// setting the clear button
allClear.addEventListener('click', function(e) {
    e.preventDefault();
    let outputDisplay = document.querySelectorAll('input[type="text"]');


    for(let i = 0; i < outputDisplay.length; i++) {
       outputDisplay[i].value = "";
    }

});

//setting the delete button 
    //the delete button should only work on the current output screen

deleteBtn.addEventListener('click', function(e) {
    e.preventDefault();
    //we will use slice. works on arrays only
    let inputArr = currentDisplay.value.split("");

    let newOutput = inputArr.slice(0, -1).join("");

    currentDisplay.value = newOutput;
});

//setting the buttons to input numbers in the output screen

let numbers = document.querySelectorAll('.numbers');

    for(let i = 0; i < numbers.length; i++) {
        let button = numbers[i]; 
        button.addEventListener('click', function(e){
            e.preventDefault();
            currentDisplay.value += button.textContent; 
        });
    };

    

//setting the operands
    //the data in the input is pushed in as the value of the previous input;
    let operands = document.querySelectorAll('.math'); 


    for(let i = 0; i < operands.length; i++) {
        let operator = operands[i]; 
        operator.addEventListener('click', function(e){
            if (currentDisplay.value !== "") {
                previousDisplay.value = currentDisplay.value + operator.textContent;
                currentDisplay.value = "";
            }

        })

            // console.log(e);
    }

    //the operand sign is displayed on the screen(preferably)


    //setting the result on the current display 

    //equals sign 

        equalsBtn.addEventListener('click', function(e) {
            let previousValue = parseFloat(previousDisplay.value.split("").slice(0, -1).join(""))
            let currentValue = parseFloat(currentDisplay.value)
            let lastCharacter = previousDisplay.value.split("").slice(-1) //this checks the operator being used

            //setting the plus sign
            if(lastCharacter == '+') {
                currentDisplay.value = currentValue + previousValue;
            }
            //setting the subtract button
            else if (lastCharacter == '-') {
                currentDisplay.value = previousValue - currentValue;
            }
            //setting the multiplication sign
            else if (lastCharacter = 'x') {
                currentDisplay.value = previousValue * currentValue;
            }
            //setting the divide button
            else if (lastCharacter == '÷') {
                currentDisplay.value = previousValue/currentValue
            }
            
    // I need my app to listen for another button click after the result is displayed and if the button clicked is a number, I want the screen to be cleared and only show the new input on the display. 
        })



// I need to set the buttons such that after entry of the operand and the data entered is pushed to the previous screen, if the next button hit is another operand, the previous operand needs to be replaced by the last operand clicked
