let num1 = prompt("Enter first number")
let num2 = prompt("Enter second number")
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
    document.getElementById("sum-el").textContent = "Sum: " + sum
    document.getElementById("sum-el").style.color = "blue"
}

function sub(){
    if(num1 > num2){
        let sub = parseInt(num1) - parseInt(num2)
    document.getElementById("sum-el").innerText = `Subtraction: ${sub}`
        document.getElementById("sum-el").style.color = "blue"
    }else{
        let sub = parseInt(num2) - parseInt(num1) 
        document.getElementById("sum-el").innerText = `Subtraction: ${sub}`
        document.getElementById("sum-el").style.color = "blue"
    }
}    

function div(){
    if(num1 > num2){
        let div = parseInt(num1) / parseInt(num2)
        document.getElementById("sum-el").innerText = `Division: ${div}`
    }else{
        let div = parseInt(num2) / parseInt(num1) 
        document.getElementById("sum-el").innerText = `Division: ${div}`
        document.getElementById("sum-el").style.color = "blue"
    }
}

function mul(){
    let mul = parseInt(num1) * parseInt(num2)
    document.getElementById("sum-el").innerText = `Multiplication: ${mul}`
    document.getElementById("sum-el").style.color = "blue"
}