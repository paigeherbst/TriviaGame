var count = 60;


// Count of Right, Wrong, and unanswered Qustions
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;



// ------------------------ Game Functions are below ------------------------
$(document).ready(function(){

	// TimeOut page after 1 minute
	//setTimeout(timeUp, limit); <--- worked around it with a hack (count = 0 manaul set)



	// Intialize the game with hidden Divs
	$("#containerDuring").hide();
	$("#lastContainer").hide();

	

	// Set Scroll position so it looks good
	window.scrollTo(0, 500);




	$("#start").on("click", function(){

		// Hide the start Div from the user
		$("containerBegin").hide();


		// Show the Game Div
		$("#containerDuring").show();

		startCountdown();
		return;

	});



	// Counts down and displays the time to the user
	function countdown(){

		// Decrement the counter, down from 60 seconds
		count--;

		// Display the count to the user in the DOM
    	$('#timerNumber').html(count + " Seconds");

    	

    	// ----------- Handle Cases for Time ar 0 Seconds -----------
			// User finishes before time is up and clicks done
			$("#finishedBtn").on("click", function(){

			// Stop the countdown and run the timeUp function
			//clearInterval(startCountdown);
			count = 0; // <---- Needed a hack since I couldn't get the clearInterval function to work... It's been a long week :/
			return;

			});


			// Finish the game after the timer reaches 0
			if(count === -1){

				// Collect the radio inputs
				timeUp();

				// Hide the game Div from the user
				$("#containerDuring").hide();

			}


	}


	// Show the countdown, increment is 1 second
	function startCountdown(){

		setInterval(countdown, 1000);

	}


	// Function to be run after the timer is up
	function timeUp(){


		// Checked values of Radio Buttons
		var Q1 = $("input:radio[name='q1']:checked").val();
		var Q2 = $("input:radio[name='q2']:checked").val();
		var Q3 = $("input:radio[name='q3']:checked").val();
		var Q4 = $("input:radio[name='q4']:checked").val();
		var Q5 = $("input:radio[name='q5']:checked").val();
	

		// Determine the right/wrong/unanswered counts ( This count be a lot more DRY :/ )
		if(Q1 == undefined){
			unansweredCount++;
		}
		else if(Q1 == "My Neighbor Totoro"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q2 == undefined){
			unansweredCount++;
		}
		else if(Q2 == "20"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q3 == undefined){
			unansweredCount++;
		}
		else if(Q3 == "1"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q4 == undefined){
			unansweredCount++;
		}
		else if(Q4 == "Spirited Away"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q5 == undefined){
			unansweredCount++;
		}
		else if(Q5 == "Dwayne Johnson"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		// After answers are validated, display the score results
		$("#correctanswers").html(correctCount);
		$("#wrongWnswers").html(wrongCount);
		$("#unanswered").html(unansweredCount);


		// Show the completed Score Div
		$("#lastContainer").show();


		// Set Scroll position so it looks good
		window.scrollTo(0, 550);

	}

});








// var panel = $('#quiz-area');
// var countStartNumber = 30;


// ///////////////////////////////////////////////////////////////////////////////

// //CLICK EVENTS

// ///////////////////////////////////////////////////////////////////////////////

// $("#startover").on('click', function() {
//   game.reset();
// });

// $(".answer-button").on('click', function() {
//   game.clicked(e);
// });

// $("#start").on('click', function() {
//   $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">30</span> Seconds</h2>');
//   game.loadQuestion();
// });

// /////////////////////////////////////////////




// var questions = [{
// 	question: "Which one of these movies has sold the most merchandise exclusive to their title?",
// 	answerList: ["Spirited Away", "Castle in the Sky", "Ponyo", "My Neighbor Totoro"],
// 	answer: 3
// },{
// 	question: "How many full-length movies has Studio Ghibli created?",
// 	answerList: ["6", "10", "20", "16"],
// 	answer: 2
// },{
// 	question: "How many Oscars have Studio Ghibli films won?",
// 	answerList: ["3", "1", "5", "0"],
// 	answer: 1
// },{
// 	question: "What is Studio Ghibli's highest rated movie?",
// 	answerList: ["My Neighbor Totoro", "Howl's Moving Castle", "Ponyo", "Spirited Away"],
// 	answer: 3
// },{
// 	question: "What actor/actress has not lent their voice to one of Studio Ghibli's films?",
// 	answerList: ["Gillian Anderson", "Billy Crystal", "Dwayne Johnson", "Kirsten Dunst"],
// 	answer: 2
// }];






// var game = {
//     questions:questions,
//     currentQuestion:0,
//     counter:countStartNumber,
//     correct:0,
//     incorrect:0,
//     countdown: function(){
//       game.counter--;
//       $('#counter-number').html(game.counter);
  
//       if (game.counter === 0){
//         console.log('TIME UP');
//         game.timeUp();
//       }
//     },
//     loadQuestion: function(){
//       timer = setInterval(game.countdown, 1000);
//       panel.html('<h2>' + questions[this.currentQuestion].question + '</h2>' );
//       for (var i = 0; i<questions[this.currentQuestion].answers.length; i++){
//         panel.append('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].answers[i] + '">' + questions[this.currentQuestion].answers[i]+ '</button>');
//       }
//     },
//     nextQuestion: function(){
//       game.counter = countStartNumber;
//       $('#counter-number').html(game.counter);
//       game.currentQuestion++;
//       game.loadQuestion();
//     },
//     timeUp: function (){
//       clearInterval(timer);
//       $('#counter-number').html(game.counter);
  
//       panel.html('<h2>Out of Time!</h2>');
//       panel.append('<h3>The Correct Answer was: ' + questions[this.currentQuestion].correctAnswer);
  
//       if (game.currentQuestion === questions.length - 1){
//         setTimeout(game.results, 3 * 1000);
//       } else {
//         setTimeout(game.nextQuestion, 3 * 1000);
//       }
//     },
//     results: function() {
//       clearInterval(timer);
  
//       panel.html('<h2>All done, heres how you did!</h2>');
//       $('#counter-number').html(game.counter);
//       panel.append('<h3>Correct Answers: ' + game.correct + '</h3>');
//       panel.append('<h3>Incorrect Answers: ' + game.incorrect + '</h3>');
//       panel.append('<h3>Unanswered: ' + (questions.length - (game.incorrect + game.correct)) + '</h3>');
//       panel.append('<br><button id="start-over">Start Over?</button>');
//     },
//     clicked: function(e) {
//       clearInterval(timer);
  
//       if ($(e.target).data("name") === questions[this.currentQuestion].correctAnswer){
//         this.answeredCorrectly();
//       } else {
//         this.answeredIncorrectly();
//       }
//     },
//     answeredIncorrectly: function() {
//       game.incorrect++;
//       clearInterval(timer);
//       panel.html('<h2>Nope!</h2>');
//       panel.append('<h3>The Correct Answer was: ' + questions[game.currentQuestion].correctAnswer + '</h3>');
  
//       if (game.currentQuestion === questions.length - 1){
//         setTimeout(game.results, 3 * 1000);
//       } else {
//         setTimeout(game.nextQuestion, 3 * 1000);
//       }
//     },
//     answeredCorrectly: function(){
//       clearInterval(timer);
//       game.correct++;
//       panel.html('<h2>Correct!</h2>');
  
//       if (game.currentQuestion === questions.length - 1){
//         setTimeout(game.results, 3 * 1000);
//       } else {
//         setTimeout(game.nextQuestion, 3 * 1000);
//       }
//     },
//     reset: function(){
//       this.currentQuestion = 0;
//       this.counter = countStartNumber;
//       this.correct = 0;
//       this.incorrect = 0;
//       this.loadQuestion();
//     }
//   };


