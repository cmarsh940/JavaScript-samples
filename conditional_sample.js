if(hunger === true){
// this is our conditional statement, we are checking if 
// the value of the variable hunger is equal to true.
    eat_cake();
    // this is the body of our conditional statement, which will 
    // only ever run if the above statement evaluates as true
};



let diet = false;
if(diet){
    dont_eat_cake();
}else{
    eat_cake();
}


let score = 4;
if(score === 5){
    console.log('You got 5 out of 5');
}else if(score === 4){
    console.log('You got 4 out of 5');
}else if(score === 3){
    console.log('You got 3 out of 5');
}else if(score === 2){
    console.log('You got 2 out of 5');
}else if(score === 1){
    console.log('You got 1 out of 5');
};


let cake = true;
let hunger = true;
let birthday = "May 13th";
if(cake){
// first we check if there is a cake, which is true
    if(hunger === true && birthday === "May 13th"){
    // then we check if both hunger is true and if 
    // birthday is set to a matching string.
        eat_cake();
        // all conditions are met, so we eat cake!
    }else{
        dont_eat_cake();
        // while the cake exists (or else we wouldn't be 
        // executing this line) we where either not hungry or 
        // it was not our birthday, so we won't eat cake :(
    }
}
// if there is no cake, then none of the above statements will 
// even evaluate. This is because 'if(cake)' equalled to false!




let diet = true;
// diet is truthy
if(!diet){
// if NOT diet
    eat_cake();
    // let them eat cake!
}

