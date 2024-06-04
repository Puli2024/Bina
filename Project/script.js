document.addEventListener("DOMContentLoaded", function() {
    const detailsPanel = document.getElementById("details-panel");

    const links = {
        "weather-link": document.getElementById("weather-template").innerHTML,
        "calendar-link": document.getElementById("calendar-template").innerHTML,
        "budget-link": document.getElementById("budget-template").innerHTML,
        "todo-day-link": document.getElementById("todo-day-template").innerHTML
    };

    for (const [linkId, content] of Object.entries(links)) {
        document.getElementById(linkId).addEventListener("click", function(event) {
            event.preventDefault();
            detailsPanel.innerHTML = content;
        });
    }
});
