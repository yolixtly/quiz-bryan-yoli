/* HTMl */
// work on wireframing HTML 
  //section to render quiz
	//question
	//answer options
	//button next
	//Scoreboard section: feedback '1 question of 5' 



/*JS section */

// Data Base Store our questions
		//create a reusable object to pass all our questions

function Question(questionText, arrayOfAnswers,correctAnswer){
	this.questionText: questionText,
//array every question is an element of an array
	this.potentialAnswer: arrayOfAnswers,
	this.correctAnswer: correctAnswer,
}


//creating a new array
questionGroup = new Array();

//instantiate the question object
questionGroup[0] = new Question(
	'Which answer below is NOT a common way to instantiate an object',
	['Obect.create()', 'Scaffolding', 'Factory functions', 'Constructor functions'],
	[1]
	);
questionGroup[1] = new Question(
	'What will a Constructor always begin with?',
	['.', 'lower-case letter', '@', 'upper-case letter'],
	[3]
	);
questionGroup[2] = new Question(
	'Which answer below is not an HTML button type',
	['radio', 'button', 'submit', 'push'],
	[3]
	);
questionGroup[3] = new Question(
	'What must you do each night in order to be successful with Thinkful',
	['speak with your mentor', 'complete daily refections', 'complete assigned nightly reading', 'all of the above'],
	[3]
	);
questionGroup[4] = new Question(
	'What do all jQuery functions begin with?',
	['#', '$', '@', 'jQ'],
	[1]
	);
questionGroup[5] = new Question(
	'What must you do each night in order to be successful with Thinkful?',
	['speak with your mentor', 'complete daily refections', 'complete assigned nightly reading', 'all of the above'],
	[3]
	);
questionGroup[6] = new Question(
	'What symbol represents a class in CSS?',
	['.', '@', '#', '%'],
	[0]
	);
questionGroup[7] = new Question(
	'What symbol represents an id in CSS?',
	['.', '@', '#', '%'],
	[2]
	);
questionGroup[8] = new Question(
	'What must you do each night in order to be successful with Thinkful',
	['speak with your mentor', 'complete daily refections', 'complete assigned nightly reading', 'all of the above'],
	[3]
	);
questionGroup[9] = new Question(
	'What must you do each night in order to be successful with Thinkful',
	['speak with your mentor', 'complete daily refections', 'complete assigned nightly reading', 'all of the above'],
	[3]
	);
questionGroup[10] = new Question(
	'What must you do each night in order to be successful with Thinkful',
	['speak with your mentor', 'complete daily refections', 'complete assigned nightly reading', 'all of the above'],
	[3]
	);



		// array of objects 
 		//questions (object)
 		//answers
 		//correct answer






// //Object Create

// var Human = {
// 	legs : 2,
// 	arms : 2
// };
//instantiate the object
// var Bryan = Object.create(Human);

// Bryan.legs //LOg : 2

// //Constructor object
// function Human() {
// 	legs : 2,
// 	arms : 2,
// }

// var Yoli = new Human; 

// Yoli.legs // log : 2 










 //We need a function that displays the questions nad its answers 
 //a button that pass to the next question 


 //Every time we click on next button we need :
 	//A counter 
 	//feedback 
 	//score 
