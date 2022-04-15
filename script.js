const equalsto = document.querySelector('.equalsto');
const numberInput = document.querySelector('#number-input');
const result = document.querySelector('#result');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');

// Click on all the numbers
numberButtons.forEach(element => {
    element.addEventListener('click', function(){
        numberInput.value = numberInput.value + this.innerText;
    });
});

// Click on all the Operators
operatorButtons.forEach(element => {
    element.addEventListener('click', function(){
        if(this.classList.contains('divide')){
            numberInput.value = numberInput.value + '/';    
        }else if(this.classList.contains('multiply')){
            numberInput.value = numberInput.value + '*';    
        }else{
            numberInput.value = numberInput.value + this.innerText;
        }
    });
});

// Equalsto button click
equalsto.addEventListener('click', function(){
    result.value = eval(numberInput.value);
});

// Clear all the input
clearButton.addEventListener('click', function(){
    clearItems();
});

// On Enter Key press after values input
numberInput.addEventListener('keydown', function(e){
    
    if(e.keyCode == 13 || e.keyCode == 9){
        console.log("Tab pressed");
        result.value = eval(numberInput.value);
    }
});

// Clear Items Function
function clearItems(){
    numberInput.value = '';
    result.value = '';
}

