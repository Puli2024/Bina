
let count=0;
    const display = document.getElementById('displayCounter');

    function displayCount() {
        displayCounter.textContent = count;
    }

    function plusDisplay() {
                count++;
                displayCount();
                
    }

    function minusDisplay() {
                count--;
                displayCount();
    }

    function counterReset() {
                count=0;
                displayCount();
    }

