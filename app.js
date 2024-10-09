// Prompt the user to enter their age
let age = prompt("Please enter your age:");

// Convert the input to a number
age = Number(age);

// Check if the age is a valid number
if (isNaN(age)) {
    console.log("Invalid input. Please enter a valid number for age.");
} else {
    // Determine the age category
    if (age < 13) {
        console.log("You are a child.");
    } else if (age >= 13 && age <= 19) {
        console.log("You are a teenager.");
    } else {
        console.log("You are an adult.");
    }
}
