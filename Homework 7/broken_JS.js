let PlayerChoice = document.getElementsByClassName("choice");
let CompArray = ["Rock", "Paper", "Scissors"]; // Corrected array initialization
let innerscore = 0;

function RPS(numb) {
  let CompDecision = CompArray[Math.floor(Math.random() * CompArray.length)]; // Added closing parenthesis

  document.getElementById("resultDecision").innerHTML =
    "The computer chose: " + CompDecision; // Fixed element ID and assignment

  if (numb === 3) {
    // Changed to strict comparison
    innerscore -= 0.5;
  }

  if (numb === 1) {
    // Changed to strict comparison
    if (CompDecision === "Paper") {
      // Changed to strict comparison
      innerscore -= 1; // Changed to subtraction
    }
    if (CompDecision === "Scissors") {
      // Changed to strict comparison
      innerscore += 1; // Changed to addition
    }
  }

  if (numb === 0) {
    // Changed to strict comparison and corrected the index
    if (CompDecision === "Rock") {
      // Changed to strict comparison
      innerscore += 1; // Changed to addition
    } else if (CompDecision === "Scissors") {
      // Fixed the else statement
      innerscore -= 1; // Changed to subtraction
    }
  }

  if (numb === 2) {
    // Changed to strict comparison
    if (CompDecision === "Rock") {
      // Changed to strict comparison
      innerscore -= 1; // Changed to subtraction
    } else if (CompDecision === "Paper") {
      // Fixed the else statement
      innerscore += 1; // Changed to addition
    }
  }

  document.getElementById("Score").innerHTML = innerscore; // Corrected element access
}
