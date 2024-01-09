
function onReady() {
    console.log("Ready to go!")
}


let fungusHP = 100;
let totalAP = 100;

//set variables to DOM elements
let progress = document.getElementById('ap-meter');
let hpProgress = document.getElementById('hp-meter');
let hpText = document.getElementById("hp-text");
let apText = document.getElementById("ap-text");


    setInterval(fungusHealing, 1000);



    //fungus healing int function
    function fungusHealing(){

       if(fungusHP < 50){
        fungusHP++;
        hpText.innerHTML = `${fungusHP} HP`;
        console.log( `HP is ${fungusHP}`)
       }else{
        //do nothing
       }
    }


    // let fungusElement = document.querySelector('.enemy .freaky-fungus');
    
    // if (totalAP < 11 && fungusHP > 0) {
    //     fungusElement.classList.remove('walk');
    //     fungusElement.classList.add('jump');
    // }
// arcane scepter attack
function arcaneScepter(event){
    //prevents AP from going negative. 
    if (totalAP < 12){
        console.log("Oh no! You don't have enough Attack Points!");
        return;
    } 
    
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
    
    //progress bar will not go down if there isn't enough ap
    if (progress.value < 25){
        return;
    } 
     // updasted DOM progress value based on 
     progress.value -= 25;
     hpProgress.value -= 33;
     
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