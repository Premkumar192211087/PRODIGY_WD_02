let startTime, updatedTime, difference, tInterval, running = false;
let laps = [];

function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
    }
}

function stopTimer() {
    if (running) {
        clearInterval(tInterval);
        running = false;
    }
}

function resetTimer() {
    clearInterval(tInterval);
    running = false;
    document.getElementById("display").innerHTML = "00:00:00";
    laps = [];
    document.getElementById("laps").innerHTML = "";
}

function lapTime() {
    if (running) {
        let lapTime = document.getElementById("display").textContent;
        laps.push(lapTime);
        document.getElementById("laps").innerHTML += `<li>${lapTime}</li>`;
    }
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000) / 10);

    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    document.getElementById("display").innerHTML = `${minutes}:${seconds}:${milliseconds}`;
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", lapTime);
