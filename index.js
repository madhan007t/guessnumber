var number = document.getElementById("number");
var result = document.getElementById("result");
var score = document.getElementById("score");
var randomnumber = Math.floor(Math.random() * 10) + 1;
var totalscore = 10;

function check() {
    var enterednumber = parseInt(number.value);

    if (isNaN(enterednumber)) {
        alert("Please enter a valid number.");
        return;
    }

    if (randomnumber === enterednumber) {
        result.textContent = "Right";
        alert("YOU WON....");
    } else {
        totalscore = totalscore - 1;
        score.textContent = "Score: " + totalscore;

        if (totalscore === 0) {
            result.textContent = "Game Over";
            alert("YOU LOST....");
            // You might want to reset the game or perform some other action here
        } else {
            result.textContent = "Wrong";
        }
    }
}
