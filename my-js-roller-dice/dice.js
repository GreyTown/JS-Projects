// this is the JS code that will generate a random number and display it in the html DOM
// first we create a dice object with items ie sides and roll which in the fuction responsible for generating a random number
const dice = {
    sides:6,
    roll: function () {
        let randomNumber = Math.floor(Math.random() * this.sides) +1;
        return randomNumber;
    }
}

// now we create a function to print a number to the browser
function printNumber(number) {
    let placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
}

// then we work on the button using the onClick method.
const button = document.getElementById('button');
button.onclick = function () {
    let result = dice.roll();
    printNumber(result);
}