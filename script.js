document.addEventListener('DOMContentLoaded', () => {
    const eventForm = document.getElementById('eventForm');
    const eventList = document.getElementById('events');

    eventForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const eventName = document.getElementById('eventName').value;
        const eventDate = document.getElementById('eventDate').value;
        const eventLocation = document.getElementById('eventLocation').value;

        if (eventName && eventDate && eventLocation) {
            addEventToList(eventName, eventDate, eventLocation);
            eventForm.reset();
        }
    });

    function addEventToList(name, date, location) {
        const li = document.createElement('li');
        li.textContent = `${name} - ${date} - ${location}`;
        eventList.appendChild(li);
    }
});
