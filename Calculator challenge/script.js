let num1 = prompt("Enter first number")
let num2 = prompt("Enter second number")
let sumEl = document.getElementById("sum-el")
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"
// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

function add(){
    let sum = parseInt(num1) + parseInt(num2)
    sumEl.textContent = "Sum: " + sum
    sumEl.style.color = "blue"
}
function sub(){
    if(num1 > num2){
        let sub = parseInt(num1) - parseInt(num2)
    sumEl.innerText = `Subtraction: ${sub}`
        sumEl.style.color = "blue"
    }else{
        let sub = parseInt(num2) - parseInt(num1) 
        sumEl.innerText = `Subtraction: ${sub}`
        sumEl.style.color = "blue"
    }
}    
function div(){
    if(num1 > num2){
        let div = parseInt(num1) / parseInt(num2)
        sumEl.innerText = `Division: ${div}`
    }else{
        let div = parseInt(num2) / parseInt(num1) 
        sumEl.innerText = `Division: ${div}`
        sumEl.style.color = "blue"
    }
}
function mul(){
    let mul = parseInt(num1) * parseInt(num2)
    sumEl.innerText = `Multiplication: ${mul}`
    sumEl.style.color = "blue"
}
