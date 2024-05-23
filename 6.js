//задание 1
let timerInterval;

document.getElementById('startButton').addEventListener('click', () => {
    const timeInput = document.getElementById('timeInput').value;
    const timerDisplay = document.getElementById('timerDisplay');
    

    clearInterval(timerInterval);
    

    let timeRemaining = parseInt(timeInput, 10);
    if (isNaN(timeRemaining) || timeRemaining < 0) {
        timeRemaining = 0;
    }
    timerDisplay.textContent = timeRemaining;
    

    timerInterval = setInterval(() => {
        timeRemaining--;
        timerDisplay.textContent = timeRemaining;
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
});

//задание2

