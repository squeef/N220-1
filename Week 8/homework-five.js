let storyText = "You wake up in a mysterious forest. What do you want to do?";
let choices = [
  { text: "Explore the forest", action: exploreForest },
  { text: "Climb a tree", action: climbTree },
  { text: "Follow a path", action: followPath },
  { text: "Sit down and rest", action: rest },
];

function displayStory() {
  const storyDiv = document.getElementById("story");
  const choicesDiv = document.getElementById("choices");

  storyDiv.innerHTML = storyText;
  choicesDiv.innerHTML = "";

  choices.forEach((choice) => {
    const button = document.createElement("button");
    button.innerText = choice.text;
    button.onclick = choice.action;
    choicesDiv.appendChild(button);
  });
}

function exploreForest() {
  storyText = "You find a sparkling river. What do you want to do next?";
  choices = [
    { text: "Drink from the river", action: drinkRiver },
    { text: "Build a raft", action: buildRaft },
    { text: "Continue exploring", action: continueExploring },
  ];
  displayStory();
}

function climbTree() {
  storyText =
    "From the top, you can see a village in the distance. What do you want to do?";
  choices = [
    { text: "Go to the village", action: goToVillage },
    { text: "Stay in the tree", action: stayInTree },
    { text: "Climb down", action: climbDown },
  ];
  displayStory();
}

function followPath() {
  storyText = "You encounter a wild animal. What will you do?";
  choices = [
    { text: "Try to tame it", action: tameAnimal },
    { text: "Run away", action: runAway },
    { text: "Observe it", action: observeAnimal },
  ];
  displayStory();
}

function rest() {
  storyText = "You feel refreshed. What do you want to do next?";
  choices = [
    { text: "Explore more", action: exploreForest },
    { text: "Set up camp", action: setUpCamp },
    { text: "Look for food", action: lookForFood },
  ];
  displayStory();
}

// Define the actions for the choices
function drinkRiver() {
  /* Add logic here */
}
function buildRaft() {
  /* Add logic here */
}
function continueExploring() {
  /* Add logic here */
}
function goToVillage() {
  /* Add logic here */
}
function stayInTree() {
  /* Add logic here */
}
function climbDown() {
  /* Add logic here */
}
function tameAnimal() {
  /* Add logic here */
}
function runAway() {
  /* Add logic here */
}
function observeAnimal() {
  /* Add logic here */
}
function setUpCamp() {
  /* Add logic here */
}
function lookForFood() {
  /* Add logic here */
}

// Start the adventure
displayStory();
