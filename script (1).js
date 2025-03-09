let timer;
let timeLeft = 25 * 60; 
let isRunning = false;
const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const pomodoroButton = document.getElementById("pomodoro");
const shortBreakButton = document.getElementById("short-break");
const longBreakButton = document.getElementById("long-break");
const alarm = document.getElementById("alarm");

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                alarm.play();
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 25 * 60;
    updateDisplay();
}

function setPomodoro() {
    timeLeft = 25 * 60;
    updateDisplay();
}

function setShortBreak() {
    timeLeft = 5 * 60;
    updateDisplay();
}

function setLongBreak() {
    timeLeft = 15 * 60;
    updateDisplay();
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
pomodoroButton.addEventListener("click", setPomodoro);
shortBreakButton.addEventListener("click", setShortBreak);
longBreakButton.addEventListener("click", setLongBreak);


updateDisplay();