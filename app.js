// --------------------------------------------------------------------------------
//Topic1 : Changing Cases
// --------------------------------------------------------------------------------

//Q1)Write a program that takes user input. Convert and show the input
// in capital letters.

var userinput = prompt("Enter Value In String & Conver into UpperCase");
console.log(userinput.toUpperCase());

//Q2) Write a program that takes user input. Convert and show the
// input in title case.

var userinput = prompt("Enter Value In String & Conver into LowerCase");
console.log(userinput.toLowerCase());



// Topic 2 : 
// --------------------------------------------------------------------------------
// Strings: measuring length and extracting parts

// Q1. Write a program to take a user input about his favorite mobile
// phone model. Find and display the length of user input in your
// browser.
var user_input = prompt("Enter a string to extract it length");
console.log(user_input.length);

// Q2. Write a program to display the last character of a user input.
var s = "Muhammad Mughees";
if (s.charAt(s.length - 1) != " ") {
    console.log(s.charAt(s.length - 1));
}



// Topic 3 :
// --------------------------------------------------------------------------------
// Strings: finding segments

// 1. Write a program to find the index of letter “n” in the word “Pakistani”
// and display the result in your browser.
var w = "Pakistani";
console.log(w.indexOf('n'));

// 2. Write a program to take user input and store username in a
// variable. If the username contains any special symbol among (@ . ,
// !), prompt the user to enter a valid username.

var userinp = prompt("Enter Your Name");
var message;
var break_space = [];
var arr = [];
for (var i = 0; i < userinp.length; i++) {
    break_space[i] = userinp.split("&nbsp");
    arr[i] = userinp.charCodeAt(i);
    if (arr[i] != 33 || arr[i] != 44 || arr[i] != 46 || arr[i] != 64) {
        message = ("Correct User Name");
    }
    while (arr[i] == 33 || arr[i] == 44 || arr[i] == 46 || arr[i] == 64) {
        alert("please enter a valid Username");
        inp = prompt("Enter your Username: ");
        for (var i = 0; i < userinpp.length; i++) {
            break_space[i] = userinp.split("&nbsp");
            arr[i] = userinp.charCodeAt(i);
            if (arr[i] != 33 || arr[i] != 44 || arr[i] != 46 || arr[i] != 64) 
            {
                break;
            }
        }
    }

}
console.log(message);


// 3. You have a string “The quick brown fox jumps over the lazy
// dog”. Write a program to count number of occurrences of word “the”
// in given string.

var string = "The quick brown fox jumps over the lazydog";
var counter = 0;

if (string.indexOf("the")) {
    counter++;
}

console.log("The Number of occurences of the: ", counter);



// Topic 4:
// --------------------------------------------------------------------------------
//Strings: finding a character at a location

//Q1) Write a program to find the character at 3 rd index in the word
// “Pakistani” and display the result in your browser.
var w = "Pakistani";
console.log(w.charAt(3));



// Topic 5:
// --------------------------------------------------------------------------------
// Strings: replacing characters

// Q1) Write a program to replace the “Hyder” to “Islam” in the word
// “Hyderabad” and display the result in your browser.
var city = "Hyderabad";
console.log(city.replace("Hyder", "Islam"));


// Q2) Write a program to replace all occurrences of “and” in the string
// with “&” and display the result in your browser.var message = “Ali and Sami are best friends. They play cricket and
// football together.”;
var m = "Ali and Sami are best friends. They play cricket and football together";
console.log(m.replace("and", "&"));


//Topic 6:
// --------------------------------------------------------------------------------
// Rounding numbers

// Q1)Write a program that takes a positive integer from user & display
// the following in your browser.
// a. number (example number: 3.45214)
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
var n = +prompt("Enter a Number");
console.log(Math.round(n));
console.log(Math.floor(n));
console.log(Math.ceil(n));


// Q2)Write a program that takes a negative floating point number
// from user & display the following in your browser.
// a. Number (example number: -2.678 )
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
var n = parseFloat(prompt("Enter a Number"));
console.log(Math.round(n));
console.log(Math.floor(n));
console.log(Math.ceil(n));


//Topic 7 : 
// --------------------------------------------------------------------------------
// Generating random numbers

// Q1) Write a program that simulates a dice using random() method of JS
// Math class. Display the value of dice in your browser.
var dice = Math.random();
var dice_high = (dice * 6) + 1;
var posibility = Math.floor(dice_high);
console.log(posibility);


// Q2) Write a program that simulates a coin toss using random() method
// of JS Math class. Display the value of coin in your browser.
var secret_no = Math.random();
var highet_digit_coin = (number_for_coin * 2) + 1;
var no_of_possibility = Math.floor(highet_digit_coin);
if (no_of_possibility === 1) {
    console.log("Tails");
} else if (no_of_possibility === 2) {
    console.log("Heads");
} else {
    console.log("Failed! Try Again!");
}


// Q3) Write a program that stores a random secret number from 1 to 10 in a
// variable. Ask the user to input a number between 1 and 10. If the user input
// equals the secret number, congratulate the user.
var inp = +prompt("Enter a Number From 1 to 10");
var for_secret_no = [];
for (var i = 0; i <= 10; i++) {
    var secret_no = Math.random();
    var highet_digit_secret_no = (secret_no * 10) + 1;
    for_secret_no[i] = Math.floor(highet_digit_secret_no);
    console.log(for_secret_no[i]);
}
for (var j = 0; j <= 10; j++) {
    if (inp === for_secret_no[j]) {
        console.log("!!!Congratulation!!!");
    } else {
        continue
    }
}


// Topic 8:
// --------------------------------------------------------------------------------
// Converting strings to integers and decimals
// 1. Write a program that asks the user about his weight. Parse the user
// input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

var intweights = parseInt(prompt("Enter Your Weights For Int"));
var decimalweights = parseFloat(prompt("Enter Your Weights For Decimal"));
console.log(intweights);
console.log(intweights + "kgs");
console.log(decimalweights + "kgs");
console.log(decimalweights + "Kilograms");




//Topic 9:
// --------------------------------------------------------------------------------
// Converting strings to numbers, numbers to strings
// Q1) Write a program that converts a string “472” to a number 472.
// Display the values & types in your browser.
// Hint: (use typeof())
var str = "472";
console.log(Number(str) + " " + typeof(str));




// Q2) Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
var number = 35.36;
var result = number.toString().replace(".", "");
console.log(result);




//Topic 10:
// --------------------------------------------------------------------------------
//Controlling the length of decimals
// Q1) Write a program to control the length of decimals to 2.
// var percentage = 30 / 45 * 100; -> 66.66666666666666
var percentage = 30 / 45 * 100
console.log(percentage.toFixed(2))

// --------------------------------------------------------------------------------