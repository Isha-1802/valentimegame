// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
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
    if (startBtn) {
        startBtn.addEventListener("click", () => {
            console.log("Start button clicked");
            startOverlay.style.opacity = "0";
            setTimeout(() => {
                startOverlay.style.visibility = "hidden";
                playMusic();
            }, 800);
        });
    }

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

    // No Button Trick
    function moveNoButton() {
        const card = document.querySelector('.elegant-card');
        if (!card) return;
        const bounds = card.getBoundingClientRect();

        const x = Math.random() * (bounds.width - 150) - (bounds.width / 2 - 75);
        const y = Math.random() * (bounds.height - 150) - (bounds.height / 2 - 75);

        noBtn.style.transform = `translate(${x}px, ${y}px)`;
    }

    if (noBtn) {
        noBtn.addEventListener("mouseover", moveNoButton);
        noBtn.addEventListener("click", () => {
            yesBtn.textContent = yesTexts[currentYesTextIndex];
            currentYesTextIndex = (currentYesTextIndex + 1) % yesTexts.length;
            yesScale += 0.3;
            yesBtn.style.transform = `scale(${yesScale})`;
            moveNoButton();
        });
    }

    // Music
    function playMusic() {
        if (!bgMusic) return;
        bgMusic.play().then(() => {
            isPlaying = true;
            musicToggle.innerHTML = "🎵";
        }).catch((err) => {
            console.log("Audio play failed:", err);
        });
    }

    if (musicToggle) {
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
    }

    // "Page" Transition
    if (yesBtn) {
        yesBtn.addEventListener("click", () => {
            proposalPage.classList.remove("screen-visible");
            proposalPage.classList.add("screen-hidden");

            successPage.classList.remove("screen-hidden");
            successPage.classList.add("screen-visible");

            playMusic();

            for (let i = 0; i < 50; i++) {
                setTimeout(createHeart, i * 50);
            }
        });
    }
});
