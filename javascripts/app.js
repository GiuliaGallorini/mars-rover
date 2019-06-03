// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0
}
// rover.direction = "S";
// rover.direction = "E";
// rover.direction = "W";

// ======================
function turnLeft() {
  if (rover.direction === "N") {
    rover.direction = "W";
    console.log("Now rover is facing West");
  } 
  else if (rover.direction === "W") {
    rover.direction = "S";
    console.log("Now rover is facing South");
  }
  else if (rover.direction === "S") {
    rover.direction = "E";
    console.log("Now rover is facing East");
  }
  else {
    rover.direction = "N";
    console.log("Now rover is facing North");
  }
  console.log("turnLeft was called!", rover);
}


function turnRight() {
  if (rover.direction === "N") {
    rover.direction = "E";
    console.log("Now rover is facing East");
  } 
  else if (rover.direction === "W") {
    rover.direction = "N";
    console.log("Now rover is facing North");
  }
  else if (rover.direction === "S") {
    rover.direction = "W";
    console.log("Now rover is facing West");
  }
  else {
    rover.direction = "S";
    console.log("Now rover is facing South");
  }  
  console.log("turnRight was called!");
}

function moveForward(){
  if (rover.direction === "N") {
    // rover.x = x;
    rover.y = y++;
    console.log("Now rover is facing North, " + x + ", " + y);
  }
  else if (rover.direction === "E") {
    rover.x = x++;
    // rover.y = y;
    console.log("Now rover is facing East, " + x + ", " + y);
  }
  else if (rover.direction === "S") {
    // rover.x = x;
    rover.y = y--;
    console.log("Now rover is facing South, " + x + ", " + y);
  }
  else {
    rover.x = x--;
    // rover.y = y;
    console.log("Now rover is facing West, " + x + ", " + y);
  }
  console.log("moveForward was called")
}


// // THE SAME WITH SWITCH STATEMENT BUT IT DOES NOT WORK
// function turnLeft() {
//   switch(turnLeft) {
//     case "N":
//       rover.direction = "W";
//       console.log("Now Rover is facing West");
//       break;
//     case "W":
//       rover.direction = "S";
//       console.log("Now Rover is facing South");
//       break;
//     case "S":
//       rover.direction = "E";
//       console.log("Now Rover is facing East");
//       break;
//     case "E":
//       rover.direction = "N";
//       console.log("Now Rover is facing North");
//       break;
//   }
// }

// function turnRight() {
//   switch(turnRight) {
//     case "N":
//       rover.direction = "E";
//       console.log("Now Rover is facing East");
//       break;
//     case "W":
//       rover.direction = "N";
//       console.log("Now Rover is facing North");
//       break;
//     case "S":
//       rover.direction = "W";
//       console.log("Now Rover is facing West");
//       break;
//     case "E":
//       rover.direction = "S";
//       console.log("Now Rover is facing South");
//       break;
//   }
// }

// function moveForward() {
//   switch(moveForward) {
//     case "N":
//       rover.direction = "N";
//       console.log("Now Rover is facing North");
//       break;
//     case "W":
//       rover.direction = "W";
//       console.log("Now Rover is facing West");
//       break;
//     case "S":
//       rover.direction = "S";
//       console.log("Now Rover is facing South");
//       break;
//     case "E":
//       rover.direction = "E";
//       console.log("Now Rover is facing East");
//       break;
//   }
// }


turnLeft();
turnRight();
moveForward();

var board = [
  [(0,0), (1,0), (2,0), (3,0), (4,0), (5,0), (6,0), (7,0), (8,0), (9,0)],
  [(0,1), (1,1), (2,1), (3,1), (4,1), (5,1), (6,1), (7,1), (8,1), (9,1)],
  [(0,2), (1,2), (2,2), (3,2), (4,2), (5,2), (6,2), (7,2), (8,2), (9,2)],
  [(0,3), (1,3), (2,3), (3,3), (4,3), (5,3), (6,3), (7,3), (8,3), (9,3)],
  [(0,4), (1,4), (2,4), (3,4), (4,4), (5,4), (6,4), (7,4), (8,4), (9,4)],
  [(0,5), (1,5), (2,5), (3,5), (4,5), (5,5), (6,5), (7,5), (8,5), (9,5)],
  [(0,6), (1,6), (2,6), (3,6), (4,6), (5,6), (6,6), (7,6), (8,6), (9,6)],
  [(0,7), (1,7), (2,7), (3,7), (4,7), (5,7), (6,7), (7,7), (8,7), (9,7)],
  [(0,8), (1,8), (2,8), (3,8), (4,8), (5,8), (6,8), (7,8), (8,8), (9,8)],
  [(0,9), (1,9), (2,9), (3,9), (4,9), (5,9), (6,9), (7,9), (8,9), (9,9)],
];

