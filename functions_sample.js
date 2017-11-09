function sayName(name){
    console.log("Hello my name is " + name);
};
sayName('Morty');
}


function sayNamePreminum(first_name, last_name){
    console.log("Hello my name is " + first_name + " " + last_name);
};
sayNamePreminum("Stewart", "Dent");
sayNamePreminum("Rocky", "Balboa");
}


let x = sayName('Morty');
console.log(x);



let message = sayName("Cinderella");
console.log(message);



let sayName2 = function(name){
    console.log("Hello my name is " + name);
};
// -- standalone function, stored in a variable --
let sayName3 = function sayName3(name){
    console.log("Hello my name is " + name);
};



(function(){
    console.log("Hello world!");
})();



let sayName4 = (name) => { console.log("Hello my name is " + name) };
sayName4("Dolores");
