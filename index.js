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



// setting the all clear button
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

    if(currentDisplay.value != "") {
        //we will use slice. works on arrays only
        let victim = currentDisplay.value.split("");

        let newOutput = victim.slice(0, -1).join("");

        currentDisplay.value = newOutput;
    }
     //in the case where the user wants to delete an entry on the previous display, continuous clicking of the delete btn after the current screen is empty should bring the contents of the previous display to the current display.
    else if(currentDisplay.value == "") {
        let copyPrevious = previousDisplay.value;
        currentDisplay.value = copyPrevious;
        previousDisplay.value = "";
    }
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
    //the operand sign is displayed on the screen(preferably)
    let operands = document.querySelectorAll('.math'); 


    for(let i = 0; i < operands.length; i++) {
        let operator = operands[i]; 
        operator.addEventListener('click', function(e){
            if (currentDisplay.value !== "" && previousDisplay.value == "") {
                previousDisplay.value = currentDisplay.value + operator.textContent;
                currentDisplay.value = "";
            }
            
            //if an operator was already input and the user clicks another operator,
            else if(currentDisplay.value == "" && previousDisplay.value !== "") {
                let copyPrevious = previousDisplay.value;
                let newOutput = copyPrevious.split("").slice(0, -1).join("");
                newOutput += operator.textContent;
                previousDisplay.value = newOutput;
            }
            //if the user clicks a number after an operator, the number entered should be added to the value in the previous display after the operator
            else if(previousDisplay.value !== "" && currentDisplay.value != "" && previousDisplay.value.split("").slice(-1) == "+") {
                let newOutput = parseFloat(previousDisplay.value.split("").slice(0, -1).join("")) + parseFloat(currentDisplay.value);
                let displayedOutput = newOutput.toString() 
                currentDisplay.value = "";
                displayedOutput += operator.textContent;

                previousDisplay.value = displayedOutput;
                
            }

            else if(previousDisplay.value !== "" && currentDisplay.value != "" && previousDisplay.value.split("").slice(-1) == "-") {
                
                let newOutput = parseFloat(previousDisplay.value.split("").slice(0, -1).join()) - parseFloat(currentDisplay.value);
                let displayedOutput = newOutput.toString() 
                currentDisplay.value = "";
                displayedOutput += operator.textContent;

                previousDisplay.value = displayedOutput;
                
                
            }

        })

    }


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
            else if (lastCharacter == 'x' && currentDisplay.value !== "") {
                currentDisplay.value = previousValue * currentValue;
            }
            //setting the divide button
            else if (lastCharacter == '÷' && currentDisplay.value !== "") {
                currentDisplay.value = previousValue / currentValue
            }
            else if (lastCharacter == "+" || "-" || "x" || "÷" && typeof(previousValue) === "number" && currentDisplay.value === "") {
                let outputValue = previousDisplay.value.split("").slice(0, -1).join("");
                currentDisplay.value = outputValue;
            }
            
    // I need my app to listen for another button click after the result is displayed and if the button clicked is a number, I want the screen to be cleared and only show the new input on the display. 
        })



// I need to set the buttons such that after entry of the operand and the data entered is pushed to the previous screen, if the next button hit is another operand, the previous operand needs to be replaced by the last operand clicked
