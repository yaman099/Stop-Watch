let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

const display = document.querySelector('h1');
const startStopButton = document.getElementById('start-stop');
const resetButton = document.getElementById('reset');

function updateTime() {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
}

function formatTime(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let milliseconds = Math.floor((ms % 1000) / 10);

    return `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}

function pad(number) {
    return number.toString().padStart(2, '0');
}

startStopButton.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timer);
        startStopButton.textContent = 'Start';
    } else {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTime, 10);
        startStopButton.textContent = 'Stop';
    }
    isRunning = !isRunning;
});

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    elapsedTime = 0;
    isRunning = false;
    display.textContent = '00:00:00';
    startStopButton.textContent = 'Start';
});
