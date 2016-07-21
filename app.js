/* HTMl */
// work on wireframing HTML 
//section to render quiz
//question
//answer options
//button next
//Scoreboard section: feedback '1 question of 5' 

/*JS section */

//declaring variables 

$(document).ready(function() {
    var form,
        htmlQuestion,
        htmlAnswers,
        htmlScore,
        button,
        newQuestion,
        questionCount,
        questionGroup,
        showChoices,
        correctAnswerCount;



    //fetch DOM elements

    form = $('#record-question');
    htmlQuestion = $('#question-wrapper');
    htmlAnswers = $('#answers-wrapper');
    htmlScore = $('#scoreboard');
    button = $('#button-area');

    // array of objects
    questionGroup = new Array();
    

    //instantiate the question object
    questionGroup[0] = new Question(
        'Which answer below is NOT a common way to instantiate an object',

        ['Obect.create()', 'Scaffolding', 'Factory functions', 'Constructor functions'],

        [1]
    );
    questionGroup[1] = new Question(
        'What will a Constructor always begin with?', ['.', 'lower-case letter', '@', 'upper-case letter'], [3]
    );
    questionGroup[2] = new Question(
        'Which answer below is not an HTML button type', ['radio', 'button', 'submit', 'push'], [3]
    );
    questionGroup[3] = new Question(
        'What must you do each night in order to be successful with Thinkful', ['speak with your mentor', 'complete daily refections', 'complete assigned nightly reading', 'all of the above'], [3]
    );
    questionGroup[4] = new Question(
        'What do all jQuery functions begin with?', ['#', '$', '@', 'jQ'], [1]
    );
    questionGroup[5] = new Question(
        'What must you do each night in order to be successful with Thinkful?', ['speak with your mentor', 'complete daily refections', 'complete assigned nightly reading', 'all of the above'], [3]
    );
    questionGroup[6] = new Question(
        'What symbol represents a class in CSS?', ['.', '@', '#', '%'], [0]
    );
    questionGroup[7] = new Question(
        'What symbol represents an id in CSS?', ['.', '@', '#', '%'], [2]
    );
    questionGroup[8] = new Question(
        'Where should you put your <script> tags in your HTML page', ['In the header', 'before you close your body tags', 'at the end of the page', 'at the start of the page'], [1]
    );
    questionGroup[9] = new Question(
        'which of the following operators uses coercion?', ['=', '==', '===', 'all of the above'], [1]
    );
    questionGroup[10] = new Question(
        'What is hoisting', ['moving up your HTML tags', 'moving declarations to the top in javascript', 'moving declarations to the bottom in javascript', 'a way to cleanup your CSS code'], [1]
    );

console.log('Number of questions: ' + questionGroup.length - 1);
    console.log('questionGroup', questionGroup);



    //function that holds the initial values of the game and starts the game 
    startGame();

    function startGame() {
        questionCount = 0;
        correctAnswerCount = 0;
        renderQuestion(questionCount);
        renderAnswers(questionCount);
    }


    //function that dynamically adds each question to HTML or DOM
    function renderQuestion(currentQuestion) {
        console.log(questionGroup);
        //render questions dynamically
        newQuestion = '<h1 id="question-area">' + questionGroup[currentQuestion].questionText + '</h1>';
        htmlQuestion.append(newQuestion);
    }
    //function that dynamically adds all answers to HTML or DOM
    function renderAnswers(currentQuestion) {
        showChoices = '<form id="record-question">';
        //render answers dynamically
        $.each(questionGroup[currentQuestion].potentialAnswer, function(index, value){
        	showChoices += '<div><input class="" type="radio" id="answer-'+index+'" name="possibleAnswer" value="'+index+'"><label for="answer-'+index+'">'+value+'</label></div>'
        });
        showChoices+= '</form>';
        htmlAnswers.append(showChoices);
    }

    //adding functionality to the button - button will submit a new and increase the question count

    button.on('click', function() {
    	
        htmlQuestion.html('');
        htmlAnswers.html('');
        //adds 1 every time we click next
        questionCount++;
        console.log(questionCount);
        //updates the index of question to render
        renderQuestion(questionCount);
        renderAnswers(questionCount);
    })
    // Data Base Store our questions
    //create a reusable object to pass all our questions

    function Question(questionText, arrayOfAnswers, correctAnswer) {
        this.questionText = questionText;
        //array every question is an element of an array
        this.potentialAnswer = arrayOfAnswers;
        this.correctAnswer = correctAnswer;
    }

    ///evaluate if the answer choice is === to the correct answer 
        //if the correct answer is === answer choice, then add 1 a correctAnsewrCounter 



    //On every click display the feedback of the answer selected for eample : 1 out of  10
    //correctAnsewrCounter of question count : 1 of 1 ; 2- 2;
    //  - 10


    // 


});













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
// 	legs : 2;
// 	arms : 2;
// }

// var Yoli = new Human; 

// Yoli.legs // log : 2 



// parameter : local variable , its a placeholder
// //create a function test(parameter)
// argument : actual value that we want to pass instead of a parameter
// //call function:  test(0)







//We need a function that displays the questions nad its answers 
//a button that pass to the next question 


//Every time we click on next button we need :
//A counter 
//feedback 
//score