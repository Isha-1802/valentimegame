const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const frontPage = document.querySelector(".front-page");
const backPage = document.querySelector(".back-page");
const message = document.querySelector(".message");
const gifContainer = document.querySelector(".gif-container");

const yesTexts = [
    "Yes, please!🎀",
    "Maan bhi jao naaa🥺🎀",
    "I do!(agr han nhi bola I'll kill u stupid😾) 🎀💖",
    "You are MINEEEEE STUPIDDD JUST SAY ITTTTT 🎀💘",
    "YESS righttttt👀💝",
    "Of course! just sayy itt meriii jaannn maan bhi jaooo😾😘",
    "Itna bhi kya bhao kha rhe ho bol bhi do han😒"
];

let currentYesTextIndex = 0;

// When "No" button is clicked, do not change anything on the "No" button but change the "Yes" button text.
noBtn.addEventListener("click", function() {
    yesBtn.textContent = yesTexts[currentYesTextIndex];
    currentYesTextIndex = (currentYesTextIndex + 1) % yesTexts.length;
});

// When "Yes" button is clicked, flip the page, change colors, and show a cute message with an enlarging gif.
yesBtn.addEventListener("click", function() {
    // Flip the page
    frontPage.style.transform = "rotateY(180deg)";
    backPage.style.transform = "rotateY(0deg)";
    
    // Change the background color of the body
    document.body.style.backgroundColor = "#ff6b81";

    // Show the message
    message.textContent = "Yay! 💖 huh Gudd forrr youu babie!😾bachh gyee tumm ye lo hugggss😽";
    
    // Show the gif with animation
    setTimeout(function() {
        gifContainer.innerHTML = `
            <img src="pics/hug him copy.gif" alt="Cute Valentine GIF">
        `;
    }, 1000);

    // Enlarge the gif gradually
    setTimeout(function() {
        const gif = gifContainer.querySelector("img");
        gif.style.width = "300px";
    }, 2000);
});
