var count = 60;
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;




$(document).ready(function(){

	
	$("#containerDuring").hide();
	$("#lastContainer").hide();

	

	
	window.scrollTo(0, 500);




	$("#start").on("click", function(){

		
		$("containerBegin").hide();


		
		$("#containerDuring").show();

		startCountdown();
		return;

	});



	
	function countdown(){

		
		count--;

		
    	$('#timerNumber').html(count + " Seconds");

    	

    	
			$("#finishedBtn").on("click", function(){

			
			count = 0; 
			return;

			});


			
			if(count === -1){

				
				timeUp();

				
				$("#containerDuring").hide();

			}


	}


	
	function startCountdown(){

		setInterval(countdown, 1000);

	}


	
	function timeUp(){


		
		var q1 = $("input:radio[name='q1']:checked").val();
		var q2 = $("input:radio[name='q2']:checked").val();
		var q3 = $("input:radio[name='q3']:checked").val();
		var q4 = $("input:radio[name='q4']:checked").val();
		var q5 = $("input:radio[name='q5']:checked").val();
	

		
		if(q1 == undefined){
			unansweredCount++;
		}
		else if(q1 == "My Neighbor Totoro"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(q2 == undefined){
			unansweredCount++;
		}
		else if(q2 == "20"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(q3 == undefined){
			unansweredCount++;
		}
		else if(q3 == "1"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(q4 == undefined){
			unansweredCount++;
		}
		else if(q4 == "Spirited Away"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(q5 == undefined){
			unansweredCount++;
		}
		else if(q5 == "Dwayne Johnson"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		
		$("#correctAnswers").html(correctCount);
		$("#wrongAnswers").html(wrongCount);
		$("#unanswered").html(unansweredCount);


		
		$("#lastContainer").show();


		
		window.scrollTo(0, 550);

	}

});
