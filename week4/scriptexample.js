
let count = 0;
        const counterDisplay = document.getElementById('counterDisplay');

        function updateDisplay() {
            counterDisplay.textContent = count;
        }

        function incrementCounter() {
            count++;
            updateDisplay();
        }

        function decrementCounter() {
            count--;
            updateDisplay();
        }

        function resetCounter() {
            count = 0;
            updateDisplay();
        }