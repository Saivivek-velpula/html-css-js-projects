let timer = 0;
let timerInterval;
function startTimer() {
    timerInterval = setInterval(function(){
        timer+=10;

        // Calculate hours
        let hours = Math.floor(timer / 3600000);

        // Calculate minutes
        let minutes = Math.floor((timer % 3600000) / 60000);

        // Calculate seconds
        let seconds = Math.floor((timer % 60000) / 1000);

        // Calculate milliseconds
        let milliseconds = timer % 1000;
        document.getElementById("time").innerText=
            (hours < 10 ? "0" + hours : hours) + ":" +
            (minutes < 10 ? "0" + minutes : minutes) + ":" +
            (seconds < 10 ? "0" + seconds : seconds) + ":" +
            (milliseconds < 100 ? "0" + milliseconds : milliseconds);
    },10);
}
function pauseTimer() {
    clearInterval(timerInterval);
}
function resetTimer() {
    clearInterval(timerInterval);
    timer = 0;
    document.getElementById("time").innerText = "00:00:00";
}