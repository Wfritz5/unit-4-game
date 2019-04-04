// 5.create a way that when the diamonds are clicked, they will not only have a set value, but it will add to the total...
//example for line prior --- (c1=8, c2=10, c3= 12, c4=5... c1(8)+c2(10)= 18+c4(5)= 23+(c3)= 35.
// mmake sure that the crystal value will remain the same within the array.
//create array of random numbers, similar to hangman, and let the game pick a number on start, display on screen.
//assign a number value to each of the crystals
//create a forloop so that when the crystal is picked, it iwill add the value to the total score.
//create variables for win, losses, score, all set to 0. when the user wins or looses, go up by 1... (i++)
//every time the game reloads, the crystal should have a different value.

//GLOBALS
var wins = 0;
var losses = 0;
var randomNumber;
var previous = 0;


var startGame = function () {

    $(".crystals").empty();

    var images = ['assets/images/gem1.jpg', 'assets/images/gem2.jpg', 'assets/images/gem3.jpg', 'assets/images/gem4.jpg',];

    randomNumber = Math.floor(Math.random() * 69) + 30;
    // console.log(randomNumber);
    $("#goal").html('Goal: ' + randomNumber);

    for (var i = 0; i < 4; i++) {
        //generating 4 random numbers/values for the crystals.

        var random = Math.floor(Math.random() * 10) + 1;
        // console.log(random);

    
        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
        });
        
        $(".crystals").append(crystal);
    }

    $("#previous").html("Total Score: " + previous);

}

startGame();


$(document).on("click",".crystal", function () {

    var num = parseInt($(this).attr("data-random"));

    previous += num;

        $("#previous").html("Total Score: " + previous);

    if (previous > randomNumber) {
        losses++;
        $("#loss").html("Losses: " + losses);
        previous = 0;
        startGame();
        

    } else if (previous === randomNumber) {
        wins++;
        $("#win").html("Wins: " + wins);
        previous = 0;
        startGame();
    }

    console.log(previous);



});