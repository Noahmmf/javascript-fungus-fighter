// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;



let fungusHP = 100;
let totalAP = 100;

function onReady() {
    console.log("Ready to go!")
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}
// arcane scepter attack
function arcaneScepter(event){
    //prevents AP from going negative. 
    if (totalAP < 12){
        console.log("Oh no! You don't have enough Attack Points!");
        return;
    } 
    //set variables to DOM elements
    let progress = document.getElementById('ap-meter');
    let hpProgress = document.getElementById('hp-meter');
    let hpText = document.getElementById("hp-text");
    let apText = document.getElementById("ap-text");
    
      //progress bar will not go down if there isn't enough ap
    if (progress.value < 12){
        return;
    } 
    // updasted DOM progress value based on 
    progress.value -= 12;
    hpProgress.value -=9;

    //updated global HP variable.
    fungusHP = fungusHP -9;
    //updated global AP variable
    totalAP = totalAP -12;

    //replaced inner text on screen to give correct amount.
    hpText.innerHTML = `${fungusHP} HP`;
    apText.innerHTML = `${totalAP} AP`;

    //console logged text. 
    console.log("scepter attack!");
    console.log(`AP is ${progress.value}, HP is ${hpProgress.value}`);
}

// entagle attack
function entangle(event){
    if (totalAP < 22){
        console.log("Oh no! You don't have enough Attack Points!");
        return;
    } 

    //set variables to DOM elements
    let progress = document.getElementById('ap-meter');
    let hpProgress = document.getElementById('hp-meter');
    let hpText = document.getElementById("hp-text");
    let apText = document.getElementById("ap-text");
    
      //progress bar will not go down if there isn't enough ap
    if (progress.value < 22){
        return;
    } 
    // updasted DOM progress value based on 
    progress.value -= 23;
    hpProgress.value -=9;
    
    //updated global HP variable.
    fungusHP = fungusHP -9;
    //updated global AP variable
    totalAP = totalAP -23;
    
    //replaced inner text on screen to give correct amount.
    hpText.innerHTML = `${fungusHP} HP`;
    apText.innerHTML = `${totalAP} AP`;

    //console logged text. 
    console.log("Entangle!");
    console.log(`AP is ${progress.value}, HP is ${hpProgress.value}`);
}

//dragon blade attack
function dragonBlade(event){
    //if statement cannot go below 0 AP
    if (totalAP < 38){
        console.log("Oh no! You don't have enough Attack Points!");
        return;
    } 
    
    //set variables to DOM elements
    let progress = document.getElementById('ap-meter');
    let hpProgress = document.getElementById('hp-meter');
    let hpText = document.getElementById("hp-text");
    let apText = document.getElementById("ap-text");
    
      //progress bar will not go down if there isn't enough ap
    if (progress.value < 38){
        return;
    } 
     // updasted DOM progress value based on 
     progress.value -= 38;
     hpProgress.value -= 47;
     
     //updated global HP variable.
     fungusHP = fungusHP -38;
     //updated global AP variable
     totalAP = totalAP -47;
     
     //replaced inner text on screen to give correct amount.
     hpText.innerHTML = `${fungusHP} HP`;
     apText.innerHTML = `${totalAP} AP`;
 
     //console logged text. 
     console.log("Dragon Blade!");
     console.log(`AP is ${progress.value}, HP is ${hpProgress.value}`);
 }

 //star fire attack
 function starFire(event){
    //if statement cannot go below 0 AP
    if (totalAP < 33){
        console.log("Oh no! You don't have enough Attack Points!");
        return;
    } 

    
    //set variables to DOM elements
    let progress = document.getElementById('ap-meter');
    let hpProgress = document.getElementById('hp-meter');
    let hpText = document.getElementById("hp-text");
    let apText = document.getElementById("ap-text");
    
    //progress bar will not go down if there isn't enough ap
    if (progress.value < 33){
        return;
    } 
     // updasted DOM progress value based on 
     progress.value -= 33;
     hpProgress.value -= 25;
     
     //updated global HP variable.
     fungusHP = fungusHP -33;
     //updated global AP variable
     totalAP = totalAP -25;
     
     //replaced inner text on screen to give correct amount.
     hpText.innerHTML = `${fungusHP} HP`;
     apText.innerHTML = `${totalAP} AP`;
 
     //console logged text. 
     console.log("Star Fire!");
     console.log(`AP is ${progress.value}, HP is ${hpProgress.value}`);
 }
 

onReady()