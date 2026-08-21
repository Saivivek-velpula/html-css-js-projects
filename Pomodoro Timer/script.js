let time = 25 * 60;
let timerInterval;

function startTimer() {

    clearInterval(timerInterval);

    timerInterval = setInterval(function() {

        let minutes = Math.floor(time / 60);

        let seconds = time % 60;

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        document.getElementById("timer").innerText =
            minutes + ":" + seconds;

        time--;

        if (time < 0) {
            clearInterval(timerInterval);
        }

    }, 1000);
}


function pauseTimer() {
    clearInterval(timerInterval);
}


function resetTimer() {

    clearInterval(timerInterval);

    time = 25 * 60;

    document.getElementById("timer").innerText = "25:00";
}