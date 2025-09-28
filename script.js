const button = document.getElementById('roll');
const dice = document.getElementById('dice');
const resultsList = document.getElementById('results');

let history = [];
function rollDice(){
    const roll=Math.floor(Math.random()*6)+1;
    history.push(roll);
    dice.innerHTML=getDiceFace(roll);
    updateResults();
}
function updateResults(){
    resultsList.innerHTML="";
    history.forEach((roll,index)=>{
        const li=document.createElement("li");
        li.innerHTML = `Roll ${index+1}: ${roll} <span>${getDiceFace(roll)}</span>`;  // <-- FIXED
        resultsList.appendChild(li);
    });
}

function getDiceFace(rollResult) {
  switch (rollResult) {
    case 1: return "&#9856;";
    case 2: return "&#9857;";
    case 3: return "&#9858;";
    case 4: return "&#9859;";
    case 5: return "&#9860;";
    case 6: return "&#9861;";
    default: return "";
  }
}
button.addEventListener("click",()=>{
    dice.classList.add("roll");
    setTimeout(()=>{
        rollDice();
        dice.classList.remove("roll");
    },500);
});
