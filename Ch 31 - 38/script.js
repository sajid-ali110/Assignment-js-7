let input = document.getElementById('input');
let output = document.getElementById('result-box');

document.getElementById('clear-btn').onclick = function () {
    input.value = null;
}

document.getElementById('clear-btn-2').onclick = function () {
    output.innerHTML = null;
}

let date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let time = hour + ':' + minutes + ':' + seconds;

let clickedAt = '<br>You clicked this button @ ' + time;

document.getElementById('originalString').innerHTML = date;


// Function for showing output in result box
function show(output, clickedTime) {
    document.getElementById('result-box').innerHTML = output + '<br>' + clickedTime;
}

// Function for showing Greet Message
function greet(ggg) {
    document.getElementById('greetBox').innerHTML = ggg;
}


let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = dayNames[date.getDay()];


// Get name of Today
function nameToday() {
    greet(null);
    show(day, clickedAt);
}


// Calculate days since I was born
function calculateBornDays() {
    greet(null);

    let dob = input.value;
    if (!dob) {
        alert('Please select your birthday.');
        return;
    }

    let secMil = new Date(dob);
    let dobMil = secMil.getTime();

    newDate = date.getTime();

    let diff = newDate - dobMil;
    diff = diff / 1000 / 60 / 60 / 24;
    diff = Math.round(diff);
    let html = 'Total number of days since you have born are : ' + diff;
    show(html, clickedAt);
}


//When is my next birthday 
function nextBirthday() {
    greet(null);

    let dob = input.value;
    if (!dob) {
        alert('Please select your birthday.');
        return;
    }
    newDate = date.getTime();

    let secMil = new Date(dob);
    let dobMil = secMil.getTime();

    let diff = dobMil - newDate;
    diff = diff / 1000 / 60 / 60 / 24;
    diff = Math.round(diff);

    let html = 'Your next birthday is ' + diff + ' days later.';
    show(html, clickedAt);
}


// Tell Time Buttons
function tellTime() {
    greet(null);

    var display = '<br>You clicked this button @ ' + new Date().toLocaleTimeString();
    output.innerHTML += '<br>' + display;
}


// Greet User
function greetUser() {
    greet(null);
    let name = prompt("Enter your name :");
    if (!name) {
        alert('Please type your name');
        return;
    }
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    if (hour >= 4 && hour < 12) {
        let msg = "Good Morning " + name + ' !';
        greet(msg);
        show(msg, clickedAt);
    }
    else if (hour >= 12 && hour < 15) {
        let msg = "Good Noon " + name + ' !';
        greet(msg);
        show(msg, clickedAt);
    }
    else if (hour >= 15 && hour < 17) {
        let msg = "Good Afternoon " + name + ' !';
        greet(msg);
        show(msg, clickedAt);
    }
    else if (hour >= 17 && hour < 20) {
        let msg = "Good Evening " + name + ' !';
        greet(msg);
        show(msg, clickedAt);
    }
    else {
        let msg = "Good Night " + name + ' !';
        greet(msg);
        show(msg, clickedAt);
    }
}


// Function for calculating Tax Amount
function calculateTax(price, taxRate) {
    let taxCal = (taxRate / 100) * price;
    return taxCal;
}


// Calculate Tax
function tax() {
    greet(null);
    let price = +prompt("Enter price");

    if (!price) {
        alert("Please Enter Price");
        return;
    }
    let taxAmount = 17;
    let tax = 'Tax 17% = ' + calculateTax(price, taxAmount).toFixed(2);
    show(tax, clickedAt);
}


// Calculate Total Price
function total() {
    greet(null);
    let price = +prompt("Enter price");
    let tax = +prompt("Enter tax percentage");

    if (!price || !tax) {
        alert("Please Enter both Price and tax percentage");
        return;
    }

    let finalAmountTax = calculateTax(price, tax);
    let finalAmount = price + finalAmountTax;

    let totalPrice = 'Your Price = ' + price + '<br>Tax ' + tax + '% = ' + finalAmountTax.toFixed(2) + '<br> Total Amount (Price + Tax) = ' + finalAmount.toFixed(2);
    show(totalPrice, clickedAt);
}