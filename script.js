function checkPassword() {
    const password = document.getElementById("password").value;
    if (password === "051125") {
        showScreen('animation-screen'); // Show animation screen
        document.getElementById("bg-music").play();
    } else {
        document.getElementById("wrong-password").textContent = "Wrong password. Try again.";
    }
}

function showPoem() {
    showScreen('poem-screen'); // Show poem screen
}

function showPrompt() {
    showScreen('prompt-screen'); // Show prompt screen
}

function showLetter() {
    showScreen('letter-screen'); // Show letter screen
}

function moveNoButton() {
    const noBtn = document.getElementById("no-button");
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    const randX = Math.floor(Math.random() * maxX);
    const randY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${randX}px`;
    noBtn.style.top = `${randY}px`;
}

// 🌸🌿 Falling Tulips and Leaves Generator
function createFallingEmoji() {
    const emoji = document.createElement("div");
    emoji.classList.add("tulip");
    
    // Randomly pick 🌸 or 🍂 (🍂 appears ~50% of the time)
    emoji.textContent = Math.random() < 0.5 ? "🍂" : "🍂";
    
    emoji.style.left = `${Math.random() * 100}vw`;
    emoji.style.animationDuration = `${10 + Math.random() * 50}s`;
    document.getElementById("tulip-container").appendChild(emoji);
    
    setTimeout(() => {
        emoji.remove();
    }, 10000);
}

setInterval(createFallingEmoji, 300);

// Utility function to show a screen and hide others
function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
        screen.style.display = 'none'; // Ensure it's hidden before fading
    });

    const screenToShow = document.getElementById(screenId);
    screenToShow.style.display = 'flex'; // Make it display before fading
    setTimeout(() => {
        screenToShow.classList.add('active');
    }, 50); // Small delay to allow display to be set
}

// Initialize the password screen as the starting screen
document.addEventListener("DOMContentLoaded", () => {
    showScreen('password-screen');
});
