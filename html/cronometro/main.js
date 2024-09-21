document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('startTimers').addEventListener('click', startTimers);
    document.getElementById('generateNumber').addEventListener('click', generateRandomNumber);

    function startTimers() {
        const minTime = parseInt(document.getElementById('minTime').value);
        const maxTime = parseInt(document.getElementById('maxTime').value);
        const timerCount = parseInt(document.getElementById('timerCount').value);
        
        let timersRemaining = timerCount;
        document.getElementById('timersRemaining').textContent = timersRemaining;

        let timers = [];
        for (let i = 0; i < timerCount; i++) {
            const randomTime = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
            timers.push(randomTime);
        }

        function runNextTimer() {
            if (timers.length > 0) {
                const time = timers.shift();
                let timeRemaining = time;
                document.getElementById('timeRemaining').textContent = timeRemaining;

                const interval = setInterval(() => {
                    timeRemaining--;
                    document.getElementById('timeRemaining').textContent = timeRemaining;

                    if (timeRemaining <= 0) {
                        clearInterval(interval);
                        alert('Reset the timer');

                        timersRemaining--;
                        document.getElementById('timersRemaining').textContent = timersRemaining;

                        runNextTimer(); // Execute next timer after closing the alert
                    }
                }, 1000);
            }
        }

        runNextTimer();
    }

    function generateRandomNumber() {
        const maxNumber = parseInt(document.getElementById('maxNumber').value);
        const randomResult = Math.floor(Math.random() * maxNumber) + 1;
        document.getElementById('randomResult').textContent = randomResult;
    }
});
