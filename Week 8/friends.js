// Reference variables
const friendName = document.getElementById("friendName");
const friendsList = document.getElementById("friendsList");

//Variable to track my friends

const myFriends = [];

// Function for adding friend

function addFriend() {
  // get the name the user typed in

  const nameValue = friendNameInput.value;

  //add friend to myFriends list

  myFriends.push(nameValue);

  //add the name to the friends list

  friendsList.innerHTML += `<li>${nameValue}
    ${nameValue} <button onclick="removeFriend('${nameValue}')">X</button>
    </li>`;
  //clear the name the user typed

  friendNameInput.value = "";
}

function removeFriend(friendName) {
  // Use variable to track index of friend to remove
  let friendIndex;

  //loop through current friends to find the friendName
  for (let i = 0; i < myFriends.length; i++) {
    if (myFriends[i] == friendName) {
      friendIndex = i;
    }
  }
  myFriends.splice(friendIndex, 1);
  console.log(myFriends);
  console.log(friendIndex);
}

function showFriends() {
  //clear pages old friends list
  friendsList.innerHTML = "";

  //loop through friends
  myFriends.foreach(function (friendName) {
    friendsList.innerHTML += `<li>
            ${friendName} <button onclick="removeFriend('${friendName}')">X</button>
            <button onlcick="moveFriend('${friendName}', true)">&#8593;</button>
            <button onlcick="moveFriend('${friendName}', false)">&#8595;</button>
            </li>`;
  });
}

function clearList() {
  myFriends.splice(0, myFriends.length);

  showFriends();
}
function moveFriend(friendName, isMovingUp) {
  let friendIndex;
  let friendNewIndex;

  for (let i = 0; i < myFriends.length; i++) {}

  for (let i = 0; i < myFriends.length; i++) {
    if (myFriends[i] === friendName) {
      friendIndex = i;
      if (isMovingUp) {
        friendNewIndex = friendIndex - 1;
      } else {
        friendNewIndex = friendIndex + 1;
      }
    }
  }
}
