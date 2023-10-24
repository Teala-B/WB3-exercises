function displaMailingLabel() {
    
    console.log("Tea'La Bradley");
    console.log("7239 W Indian School");
    console.log("Phoeniz, Az, 85015");
}
displaMailingLabel()

console.log();

function addNumbers(num1, num2) {
    
   let answer = num1 + num2
   let message = num1 + " + " + num2 + " = " + answer
   console.log(message);
}

    let numb1 = 3
    let numb2 = 4

    addNumbers(3, 4)

    console.log();

function displayReceipt(totalDue, amountPaid) {
    let changeDue = totalDue - amountPaid
    
    if (totalDue >= changeDue) {
        let message = "The amount left to pay is $" + changeDue
        console.log(message);
    }
    
   else if (changeDue < 0) {
        let amountDue = changeDue * -1
        let message = "The change back is $" + amountDue
        console.log(message);

    }
}
let totalDue = 30
let amountPaid = 20

displayReceipt(totalDue, amountPaid)