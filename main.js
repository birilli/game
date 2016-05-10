// VARIABLES ASSIGNED BELOW 


var planks = 0;
var sticks = 0;
var pickaxe = 0;
var pickaxezero = 0;
var stone = 0;
var findiron = 0; // used for 'find iron' event
var iron = 0;
var findsilver = 0;
var silver = 0;
var findgold = 0;
var gold = 0;
var findcoal = 0;
var coal = 0;
var findruby = 0;
var ruby = 0;
var findsapphire = 0;
var sapphire = 0;

// END OF VARIABLE ASSIGNMENT 


var save = {
	wood: wood,
	planks: planks,
	sticks: sticks,
	pickaxe: pickaxe,
	pickaxezero: pickaxezero,
	stone: stone,
	golems: golems,
	findiron: findiron,
	iron: iron
}




function savegame() {
	localStorage.setItem("save",JSON.stringify(save));
}


function loadsave () {
	var savegame = JSON.parse(localStorage.getItem("save"));
}



var wood = 0;
var number = 1;

function woodClick(number){
    wood = wood + number;
    document.getElementById('wood').innerHTML = wood;
};





			// CRAFT PLANK ONCLICK
			function buyPlank(){
				var plankCost = 10;     //works out the cost of this plank
				if(wood >= plankCost){                                   //checks that the player can afford the plank
					planks = planks + 1;                                   //increases number of planks
					wood = wood - plankCost;                          //removes the wood spent
					document.getElementById('planks').innerHTML = planks;  //updates the number of planks for the user (WHAT SHOWS UP IN TABLE)
					document.getElementById('wood').innerHTML = wood;  //updates the number of wood for the user
				};
				
			};






	// CRAFT STICK ONCLICK
	function craftStick(){
    var stickCost = 2;     //works out the cost of this stick
    if(planks >= stickCost){                                   //checks that the player can afford the stick
        sticks = sticks + 1;                                   //increases number of sticks
    	planks = planks - stickCost;                          //removes the planks spent
        document.getElementById('sticks').innerHTML = sticks;  //updates the number of sticks for the user
        document.getElementById('planks').innerHTML = planks;  //updates the number of planks for the user
    };
    
};


var alertmining = 0; 



			// CRAFT PICKAXE ONCLICK
			// Pickaxe displayed as '0' or '1', not letters
			function craftPickaxe(){
var pickaxeCost = 3;    									 //works out the cost of this pickaxe
				if(sticks >= pickaxeCost){                                   //checks that the player can afford the pickaxe
					pickaxe = 1;                                   //increases number of pickaxes
					sticks = sticks - pickaxeCost;                          //removes the sticks spent
					document.getElementById('pickaxe').innerHTML = 'Yes';  //updates the number of pickaxes for the user
					document.getElementById('sticks').innerHTML = sticks;  //updates the number of sticks for the user
					document.getElementById('pickaxebtn').disabled = true; //disables 'craft pickaxe' button
};			
	
				if(sticks < pickaxeCost){                // no pickaxe is crafted 
					pickaxe = pickaxe; 									//no change in variable 
					document.getElementById('pickaxe').innerHTML = pickaxe;  //updates the number of pickaxes for the user
					document.getElementById('sticks').innerHTML = sticks;  //updates the number of sticks for the user
				}; 
};
 
function stoneClick(){
	
		if (pickaxe < 1){
			window.alert('Mining stone requires a pickaxe.');    //alertbox 
			stone = stone + 0;										
			document.getElementById('stone').innerHTML = stone;  	// no change in stone 
};

		if (pickaxe >= 1){
			stone = stone + 1;       
			document.getElementById('stone').innerHTML = stone;				// stone increases; successful mining !!
			
		};	
};
	
	/*
function mineResult () {
	
	if (findiron <= 5) {
	iron = iron + 1;
	stone = stone + 0;
    document.getElementById("iron").innerHTML = iron;	
	document.getElementById("stone").innerHTML = stone;
	}

	if (findiron > 5) {
	iron = iron + 0;
	stone = stone + 1;
	document.getElementById("iron").innerHTML = iron;	
	document.getElementById("stone").innerHTML = stone;
	}
	
}; */


var golems = 0
var wordstone = 'stone'

function golemClick() {
	var golemCost = Math.floor(10 * Math.pow(1.1,golems));	
	
	if (stone >= golemCost) {
		stone = stone - golemCost;
		golems = golems + 1;
		document.getElementById('stone').innerHTML = stone;
		document.getElementById('golems').innerHTML = golems;
	};
var nextgolemCost = Math.floor(10 * Math.pow(1.1,golems));	
document.getElementById('golemCost').innerHTML = nextgolemCost;
};
	
	

window.setInterval(function(){
	
	wood = (wood) + (golems);
	
}, 1000);
