$(document).ready(function(){


  var previousRollValue = 1;
  var currentRollValue = 1;
  var currentTurnTotal = 0;
  var players = {
    player1Total: 0,
    player2Total: 0
  }
  var activePlayer = 1;

// This function shows and hides the correct die rolled.
  function switchDice(currentRollValue){

    $("#dice" + currentRollValue).show();
    $("#dice" + previousRollValue).hide();

  }

  function switchPlayer(currentTurnValue){
    if (activePlayer === 1){
      players.player1Total += currentTurnTotal;
      activePlayer = 2;
    } else if (activePlayer === 2){
      players.player2Total += currentTurnTotal;
      activePlayer = 1;
    }
    if (activePlayer === 1){
      $("#player1TitleActive").slideToggle(500);
      $("#player1TitleInactive").slideToggle(500);
      $("#player2TitleActive").slideToggle(500);
      $("#player2TitleInactive").slideToggle(500);
    } else if (activePlayer === 2){
      $("#player1TitleActive").slideToggle(500);
      $("#player1TitleInactive").slideToggle(500);
      $("#player2TitleActive").slideToggle(500);
      $("#player2TitleInactive").slideToggle(500);
    }
    currentTurnTotal = 0;
    $("#player1TotalScore").text(players.player1Total);
    $("#player2TotalScore").text(players.player2Total);

    if (players.player1Total>= 100){
      alert("Player 1 Wins")

    } else if (players.player2Total >= 100){
      alert("Player 2 Wins")
    }
  }



// calculate currentTurnTotal for the active player.

  $("#rollButton").click(function(){
    previousRollValue = currentRollValue;
    console.log("Previous Roll Value is: " + previousRollValue);
    currentRollValue = parseInt(Math.floor(Math.random() * 6) + 1);
    console.log("Current Roll Value is :" + currentRollValue);
    if (currentRollValue === 1) {
      currentTurnTotal = 0;
      switchPlayer();
    } else if (currentRollValue > 1 && currentRollValue <= 6) {
      currentTurnTotal = currentTurnTotal + currentRollValue;
    }
    if(activePlayer === 1){
      $("#player1CurrentScore").text(currentTurnTotal);
      $("#player2CurrentScore").text("");
    } else if (activePlayer === 2){
      $("#player2CurrentScore").text(currentTurnTotal);
      $("#player1CurrentScore").text("");
    }
    switchDice(currentRollValue);

    return;
    });



    $("#holdButton").click(function(){
      switchPlayer();
    });







});
