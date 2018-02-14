
// Game objects and variables
var obiWan = {

	health: 120,
	attack: 13,
	counter: 10,
	enemy: false,
	hero: false,
	selected: false,

};
var luke = {

	health: 100,
	attack: 15,
	counter: 10,
	enemy: false,
	hero: false,
	selected: false,

};
var sidious = {

	health: 150,
	attack: 10,
	counter: 10,
	enemy: false,
	hero: false,
	selected: false,

};
var maul = {

	health: 70,
	attack: 20,
	counter: 10,
	enemy: false,
	hero: false,
	selected: false,

};

var selectHero = false;
var selectEnemy = false;


//Game
startGame();

function startGame(){


	//select a hero if one has not already been selected.
	heroSelect();

	//selects an enemy to attack
	enemySelect();

	//attacks the selected enemy
	attackSelectedEnemy();

}

function heroSelect(){

	

	$(".obiWan").on("click", function(){

		if (selectHero === false) {

			selectHero = true;

			$(".heroDiv").append('<h1>Hero</h1>');
			$(".enemyDiv").append('<h1>Enemies</h1>');

			$(".heroDiv").append('<img class="obiWan" src="http://i2.wp.com/www.islamscifi.com/wp-content/uploads/2011/12/obiwankenobiaotcv2.jpg?fit=800%2C600" height="200px" width="200px">');
			$(".enemyDiv").append('<img class="luke" src="http://www.redcarpetnewstv.com/wp-content/uploads/2012/11/Star-Wars-Luke-Skywalker-Episode-VII.jpg" height="200px" width="200px">');
			$(".enemyDiv").append('<img class="sidious" src="https://vignette.wikia.nocookie.net/all-enemies/images/2/2f/Darth_Sidious.jpg/revision/latest?cb=20150314041057" height="200px" width="200px">');
			$(".enemyDiv").append('<img class="maul" src="https://s3.amazonaws.com/live_object_images/23240/1.jpg" height="200px" width="200px">');
			$(".attackDiv").append('<button id="attack">Attack</button>');

			$(".playerChoice").hide();

			obiWan.hero = true;
			luke.enemy = true;
			sidious.enemy = true;
			maul.enemy = true;

		}

	});

	$(".luke").on("click", function(){

		if (selectHero === false) {

			selectHero = true;

			$(".heroDiv").append('<h1>Hero</h1>');
			$(".enemyDiv").append('<h1>Enemies</h1>');

			$(".heroDiv").append('<img class="luke" src="http://www.redcarpetnewstv.com/wp-content/uploads/2012/11/Star-Wars-Luke-Skywalker-Episode-VII.jpg" height="200px" width="200px">');
			$(".enemyDiv").append('<img class="obiWan" src="http://i2.wp.com/www.islamscifi.com/wp-content/uploads/2011/12/obiwankenobiaotcv2.jpg?fit=800%2C600" height="200px" width="200px">');
			$(".enemyDiv").append('<img class="sidious" src="https://vignette.wikia.nocookie.net/all-enemies/images/2/2f/Darth_Sidious.jpg/revision/latest?cb=20150314041057" height="200px" width="200px">');
			$(".enemyDiv").append('<img class="maul" src="https://s3.amazonaws.com/live_object_images/23240/1.jpg" height="200px" width="200px">');
			$(".attackDiv").append('<button id="attack">Attack</button>');

			$(".playerChoice").hide();

			luke.hero = true;
			obiWan.enemy = true;
			sidious.enemy = true;
			maul.enemy = true;

		}

	});

	$(".sidious").on("click", function(){

		if (selectHero === false) {

			selectHero = true;

			$(".heroDiv").append('<h1>Hero</h1>');
			$(".enemyDiv").append('<h1>Enemies</h1>');

			$(".heroDiv").append('<img class="sidious" src="https://vignette.wikia.nocookie.net/all-enemies/images/2/2f/Darth_Sidious.jpg/revision/latest?cb=20150314041057" height="200px" width="200px">');
			$(".enemyDiv").append('<img class="luke" src="http://www.redcarpetnewstv.com/wp-content/uploads/2012/11/Star-Wars-Luke-Skywalker-Episode-VII.jpg" height="200px" width="200px">');
			$(".enemyDiv").append('<img class="obiWan" src="http://i2.wp.com/www.islamscifi.com/wp-content/uploads/2011/12/obiwankenobiaotcv2.jpg?fit=800%2C600" height="200px" width="200px">');
			$(".enemyDiv").append('<img class="maul" src="https://s3.amazonaws.com/live_object_images/23240/1.jpg" height="200px" width="200px">');
			$(".attackDiv").append('<button id="attack">Attack</button>');

			$(".playerChoice").hide();

			sidious.hero = true;
			luke.enemy = true;
			obiWan.enemy = true;
			maul.enemy = true;

		}

	});

	$(".maul").on("click", function(){

		if (selectHero === false) {

			selectHero = true;

			$(".heroDiv").append('<h1>Hero</h1>');
			$(".enemyDiv").append('<h1>Enemies</h1>');

			$(".heroDiv").append('<img class="maul" src="https://s3.amazonaws.com/live_object_images/23240/1.jpg" height="200px" width="200px">');
			$(".enemyDiv").append('<img class="sidious" src="https://vignette.wikia.nocookie.net/all-enemies/images/2/2f/Darth_Sidious.jpg/revision/latest?cb=20150314041057" height="200px" width="200px">');
			$(".enemyDiv").append('<img class="luke" src="http://www.redcarpetnewstv.com/wp-content/uploads/2012/11/Star-Wars-Luke-Skywalker-Episode-VII.jpg" height="200px" width="200px">');
			$(".enemyDiv").append('<img class="obiWan" src="http://i2.wp.com/www.islamscifi.com/wp-content/uploads/2011/12/obiwankenobiaotcv2.jpg?fit=800%2C600" height="200px" width="200px">');
			$(".attackDiv").append('<button id="attack">Attack</button>');

			$(".playerChoice").hide();

			maul.hero = true;
			sidious.enemy = true;
			luke.enemy = true;
			obiWan.enemy = true;

		}

	});

}

function enemySelect(){

	$(document).on("click",".obiWan",function(){

		if (obiWan.enemy === true && selectEnemy === false) {

		 	$(".obiWan").css("border", "solid red 5px");
		 	selectEnemy = true;
		 	obiWan.selected = true;

		}

	});

	$(document).on("click",".luke", function(){

		if (luke.enemy === true && selectEnemy === false) {

		 	$(".luke").css("border", "solid red 5px");
		 	selectEnemy = true;
		 	luke.selected = true;

		}

		
	});

	$(document).on("click",".sidious", function(){

		if (sidious.enemy === true && selectEnemy === false) {

		 	$(".sidious").css("border", "solid red 5px");
		 	selectEnemy = true;
		 	sidious.selected = true;

		}

		
	});

	$(document).on("click",".maul", function(){

		if (maul.enemy === true && selectEnemy === false) {

		 	$(".maul").css("border", "solid red 5px");
		 	selectEnemy = true;
		 	maul.selected = true;

		}

		
	});

}

function attackSelectedEnemy(){

	$(document).on("click","#attack", function(){

		//ObiWan as selected enemy
		if (obiWan.selected === true && luke.hero === true) {
			
			obiWan.health -= luke.attack;
			luke.health -= obiWan.counter;

			console.log("luke health " + luke.health);
			console.log("obiWan health " + obiWan.health );

		}
		if (obiWan.selected === true && sidious.hero === true) {
			
			obiWan.health -= sidious.attack;
			sidious.health -= obiWan.counter;

			console.log("sidious health " + sidious.health);
			console.log("obiWan health " + obiWan.health );

		}
		if (obiWan.selected === true && maul.hero === true) {
			
			obiWan.health -= maul.attack;
			maul.health -= obiWan.counter;

			console.log("maul health " + maul.health);
			console.log("obiWan health " + obiWan.health );

		}

		//Luke as selected enemy
		if (luke.selected === true && obiWan.hero === true) {
			
			luke.health -= obiWan.attack;
			obiWan.health -= luke.counter;

			console.log("luke health " + luke.health);
			console.log("obiWan health " + obiWan.health );

		}
		if (luke.selected === true && sidious.hero === true) {
			
			luke.health -= sidious.attack;
			sidious.health -= luke.counter;

			console.log("luke health " + luke.health);
			console.log("sidious health " + sidious.health );

		}
		if (luke.selected === true && maul.hero === true) {
			
			luke.health -= maul.attack;
			maul.health -= luke.counter;

			console.log("luke health " + luke.health);
			console.log("maul health " + maul.health );

		}


		//sidious as selected enemy
		if (sidious.selected === true && obiWan.hero === true) {
			
			sidious.health -= obiWan.attack;
			obiWan.health -= sidious.counter;

			console.log("sidious health " + sidious.health);
			console.log("obiWan health " + obiWan.health );

		}
		if (sidious.selected === true && luke.hero === true) {
			
			sidious.health -= luke.attack;
			luke.health -= sidious.counter;

			console.log("luke health " + luke.health);
			console.log("sidious health " + sidious.health );

		}
		if (sidious.selected === true && maul.hero === true) {
			
			sidious.health -= maul.attack;
			maul.health -= sidious.counter;

			console.log("maul health " + maul.health);
			console.log("sidious health " + sidious.health );

		}


		//maul as selected enemy
		if (maul.selected === true && obiWan.hero === true) {
			
			maul.health -= obiWan.attack;
			obiWan.health -= maul.counter;

			console.log("obiWan health " + obiWan.health);
			console.log("maul health " + maul.health );

		}
		if (maul.selected === true && luke.hero === true) {
			
			maul.health -= luke.attack;
			luke.health -= maul.counter;

			console.log("luke health " + luke.health);
			console.log("maul health " + maul.health );

		}if (maul.selected === true && sidious.hero === true) {
			
			maul.health -= sidious.attack;
			sidious.health -= maul.counter;

			console.log("maul health " + maul.health);
			console.log("sidious health " + sidious.health );

		}

	});

}













