// Get references to the elements
const notificationBar = document.querySelector('.notification-bar');
const notificationText = document.querySelector('.notification-text');
const notificationLink = document.querySelector('.notification-bar a');

// Function to update the notification
function updateNotification(newText, newLink) {
    notificationText.textContent = newText;
    notificationLink.href = newLink;
}

// Example usage:
updateNotification('This is the new notification text.', 'https://new-link.com');

const notificationtext = document.querySelector('.notification-text');
const pauseButton = document.querySelector('.pause-button');

let isPaused = false;

pauseButton.addEventListener('click', () => {
    if (isPaused) {
        notificationtext.style.animation-Play-State = 'running';
        pauseButton.textContent = 'Pause';
    } else {
        notificationtext.style.animation-Play-State = 'paused';
        pauseButton.textContent = 'Play';
    }
    isPaused = !isPaused;
});