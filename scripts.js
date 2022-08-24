//Function that clear the display
let counter = 0;
let maxTries = 6;
function clr() {
    document.getElementById("display").value = "";
}

// Function that display value
function dis(val) {
    document.getElementById("display").value += val;
}

function myFunction(event) {
    if (event.key == '0' || event.key == '1'
        || event.key == '2' || event.key == '3'
        || event.key == '4' || event.key == '5'
        || event.key == '6' || event.key == '7'
        || event.key == '8' || event.key == '9'
    )
        document.getElementById("display").value += event.key;
}
let cal = document.getElementById("calcu");
cal.onkeyup = function (event) {
    if (event.keyCode == 191) {
        console.log("Enter");
        let x = document.getElementById("display").value
        console.log(x);
        solve();
    }
}

// Show Name in Screen
function tmp(){
    let name = document.getElementById("txt").value;
    localStorage.setItem("textvalue",name);
    return false;
}
let t= document.getElementById("display").value=localStorage.getItem("textvalue");
document.getElementById("display").value =("Welcome!!! " + t);
setTimeout(() => {
    document.getElementById("display").value = "Let's Gooo";
  }, 3500); 
setTimeout(() => {
    document.getElementById("display").value = "";
  },4000);   


// Game Code
let num = (Math.random() * 100);
let ranNum = Math.trunc(num); // trunc removes after point value
//console.log("Random NUmber are ", ranNum);
function solve() {
    let x = document.getElementById("display").value
    let input = x;
    counter += 1;


    if(input == ranNum){
        win();
    }
    else if (counter > maxTries) 
    {
        document.getElementById("display").value = "You have no more tries left.";
    }
    else{
        if (input > 100) {
            console.log("Number is B/W 1 & 100");
            document.getElementById("display").value = "Enter Numbers b/w 1 & 100";
            setTimeout(() => {
                document.getElementById("display").value = "";
              }, 2000);
        }
        else{
            if (input > ranNum) {
                console.log("Less than", input);
                document.getElementById("display").value =("Number is Less than " + input);
                setTimeout(() => {
                    document.getElementById("display").value = "";
                  }, 2000);
            }
            else if (input < ranNum) {
                console.log("Greater Than", input);
                document.getElementById("display").value =("Number is Greater than " + input);
                setTimeout(() => {
                    document.getElementById("display").value = "";
                  }, 2000);   
            }
            else if(input == ranNum){
                win();
            }
        } 
    }
}

function reset(){
    num = (Math.random() * 100);
    ranNum = Math.trunc(num); 
    // console.log(ranNum);
    counter = 0;
    document.getElementById("display").value =("Game Start in few Seconds...");
    setTimeout(() => {
        document.getElementById("display").value = "";
      }, 3000); 
    setTimeout(() => {
        document.getElementById("display").value = "Let's Go";
      },2500);   
}

function win(){
document.getElementById("display").value =("You got it in " + counter + " Tries");
setTimeout(() => {
    document.getElementById("display").value = "Press 'Play Again'";
  }, 4000); 
  counter = 0;
  num = (Math.random() * 100);
  ranNum = Math.trunc(num); 
//   console.log(ranNum);
}


