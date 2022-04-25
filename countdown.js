function startFunction() {
    var currTime = 10
    var i = 1;
    while (i < 12) {


        if (i == 11) {
            setTimeout(function () {

                document.getElementById("start").innerHTML = "Blastoff!!!";
            }, 1000 * i);
        } else if (i > 5) {
            setTimeout(function () {
                document.getElementById("start").innerHTML =
                    "Warning Less than ½ way to launch, time left = " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("start").innerHTML = "The timer has begun " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
        i = i + 1;
    }
}
//Includes a countdown that starts at 10 and goes to 0. At the halfway mark the timer changes the message indicated

function playSpiral() {
    Audio = new Audio(src = "Spiral. Kevin Kendle.mp3");
    Audio.play();
}
