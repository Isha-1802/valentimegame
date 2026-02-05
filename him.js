const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const proposalPage = document.getElementById("proposalPage");
const successPage = document.getElementById("successPage");
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const startOverlay = document.getElementById("startOverlay");
const startBtn = document.getElementById("startBtn");

const yesTexts = [
    "Wait, are you sure? 🥺",
    "Pllleeeeaaassseee? 🎀",
    "Don't do this to me... 💔",
    "I'll be very sad... 😭",
    "I'm gonna cry! 😿",
    "Just click the big RED button! 🔴",
    "You have no choice now! 😾",
    "STILL NO?! 😱",
    "I'm literally begging! 🙏",
    "Say YES already! 😘"
];

let currentYesTextIndex = 0;
let yesScale = 1;
let isPlaying = false;

// Handle Start Interaction
startBtn.addEventListener("click", () => {
    startOverlay.style.opacity = "0";
    setTimeout(() => {
        startOverlay.style.visibility = "hidden";
        playMusic();
    }, 800);
});

// Particles
const emojis = ["❤️", "💖", "💝", "💗", "💓", "✨", "🌸", "🌹"];
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart-particle", "floating");
    heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 4 + 4 + "s";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 400);

// No Button Trick (Improved to stay visible)
function moveNoButton() {
    const card = document.querySelector('.elegant-card');
    const bounds = card.getBoundingClientRect();

    // Calculate random position within the card padding/safe area
    const x = Math.random() * (bounds.width - 150) - (bounds.width / 2 - 75);
    const y = Math.random() * (bounds.height - 150) - (bounds.height / 2 - 75);

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", () => {
    // Also grow the yes button when clicked
    yesBtn.textContent = yesTexts[currentYesTextIndex];
    currentYesTextIndex = (currentYesTextIndex + 1) % yesTexts.length;
    yesScale += 0.3;
    yesBtn.style.transform = `scale(${yesScale})`;
    moveNoButton();
});

// Music
function playMusic() {
    bgMusic.play().then(() => {
        isPlaying = true;
        musicToggle.innerHTML = "🎵";
    }).catch(() => { });
}

musicToggle.addEventListener("click", () => {
    if (isPlaying) {
        bgMusic.pause();
        musicToggle.innerHTML = "🔇";
    } else {
        bgMusic.play();
        musicToggle.innerHTML = "🎵";
    }
    isPlaying = !isPlaying;
});

// "Page" Transition
yesBtn.addEventListener("click", () => {
    proposalPage.classList.remove("screen-visible");
    proposalPage.classList.add("screen-hidden");

    successPage.classList.remove("screen-hidden");
    successPage.classList.add("screen-visible");

    playMusic(); // Ensure music plays

    // Celebration effect
    for (let i = 0; i < 50; i++) {
        setTimeout(createHeart, i * 50);
    }
});
