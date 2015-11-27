var turn = 0;
var playerOneTotal = 0;
var playerTwoTotal = 0;

$('.score1').html()

// squares clickable
$('.square').click(function() {	
	if (turn === 0 && $(this).text() == "") {
		$('.play1Invisible').css("visibility", "hidden");
		$('.play2Invisible').css("visibility", "visible");
		$(this).text("x");
		turn = 1;
	}else if(turn === 1 && $(this).text() == "") {
		$('.play2Invisible').css("visibility", "hidden");
		$('.play1Invisible').css("visibility", "visible");
		$(this).text("o");
		turn = 0;
	}
	rules(); //Winning rules function to check if there is any winner
});

//winning rules
var rules = function() {
	var result = false;
	var $aText = $('.a').text();
	var $bText = $('.b').text();
	var $cText = $('.c').text();
	var $dText = $('.d').text();
	var $eText = $('.e').text();
	var $fText = $('.f').text();
	var $gText = $('.g').text();
	var $hText = $('.h').text();
	var $iText = $('.i').text();

	if ($aText === $bText && $aText === $cText && $aText !== "" ) { 
		result = true;
	} else if ($dText === $eText && $dText === $fText && $dText !== "" ) { 
		result = true;
	} else if ($gText === $hText && $gText === $iText && $gText !== "") { 
		result = true;
	} else if ($aText === $dText && $aText === $gText && $aText !== "") { 
		result = true;
	} else if ($bText === $eText && $bText === $hText && $bText !== "") { 
		result = true;
	} else if ($cText === $fText && $cText === $iText && $cText !== "") { 
		result = true;
	} else if ($aText === $eText && $aText === $iText && $aText !== "") { 
		result = true;
	} else if ($cText === $eText && $cText === $gText && $cText !== "") { 
		result = true; 
	};

	if ( result ) {
		winner();
	} else if($aText !== ""&& $bText !== "" && $cText !== "" && $dText !== "" && $eText !== "" && $fText !== "" && $gText !== "" && $hText !== "" && $iText !== "" && result === false) {
		$('#draw').css("visibility", "visible");
		setTimeout(function(){$('.square').text("")},1000);
		setTimeout(function(){$('#draw').css("visibility", "hidden")},1000);
	};
};

//winner function
var winner = function() {
	var currentPlayer;
	if ( turn === 1 ) {
		currentPlayer = "x";
		playerOneTotal += 1;
		$('.winnerOneInvisible').css("visibility", "visible");
	} else {
		currentPlayer = "o";
		playerTwoTotal += 1;
		$('.winnerTwoInvisible').css("visibility", "visible");
	}
	setTimeout(function(){$('.square').text("")},1000);
	setTimeout(function(){$('.winnerOneInvisible').css("visibility", "hidden")},1000);
	setTimeout(function(){$('.winnerTwoInvisible').css("visibility", "hidden")},1000);
	$('.score1').html(playerOneTotal);
	$('.score2').html(playerTwoTotal);

	if (playerOneTotal === 3) {
		victoryOne();
	}else if (playerTwoTotal === 3) {
		victoryTwo();
	};
};

//New Game
var gameReset = false;
$('.newGame').click(function() {
	gameReset = true;
	turn = 0;
	$('.play2Invisible').css("visibility", "hidden");
	$('.play1Invisible').css("visibility", "visible");
	$('.square').text("");
	$('.score1').html(0);
	$('.score2').html(0);
	playerOneTotal = 0;
	playerTwoTotal = 0;
	$('.winnerTwoInvisible').css("visibility", "hidden");
	$('.winnerOneInvisible').css("visibility", "hidden");
	$('.winnerOne').css('display', 'none');
	$('.winnerTwo').css('display', 'none');
});

//victory rolling text
function victoryOne(){
	// Stop the animation if the game has been reset.
	if (gameReset === true) {
		gameReset = false;
		return;
	}
    $('.winnerOne').css('top', '');
    $('.winnerOne').show().animate({top:"-100%"}, 5000, victoryOne);
}
function victoryTwo(){
	// Stop the animation if the game has been reset.
	if (gameReset === true) {
		gameReset = false;
		return;
	}
    $('.winnerTwo').css('top', '');
    $('.winnerTwo').show().animate({top:"-100%"}, 5000, victoryTwo);
}





