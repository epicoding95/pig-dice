$(document).ready(function(){



  var currentRollValue = 0;
  var players = {
    player1Total: 0,
    player2Total: 0
  }
  var activePlayer = 1;
  var currentTurnTotal = 0;


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
    $("#player1TotalScore").text(player1Total);
    console.log("Player 1 Total: " + players.player1Total);
    console.log("Player 2 Total: " + players.player2Total);
  }

// calculate currentTurnTotal for the active player.

  $("#rollButton").click(function(){
    currentRollValue = parseInt(Math.floor(Math.random() * 6) + 1);
    console.log("Current Roll Value is :" + currentRollValue);
    if (currentRollValue === 1) {
      currentTurnTotal = 0;
      switchPlayer();
    } else if (currentRollValue > 1 && currentRollValue <= 6) {
      currentTurnTotal = currentTurnTotal + currentRollValue;
    }

    console.log("Current Turn Total is: " + currentTurnTotal);
    return;
    });



    $("#holdButton").click(function(){
      switchPlayer();
    });







});
