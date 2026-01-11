/* Typing animation */
const text = "Happy Birthday, Ammu🤍";
const typing = document.getElementById("typing");
let i = 0;

function typeText() {
  if (i < text.length) {
    typing.textContent += text[i];
    i++;
    setTimeout(typeText, 140);
  }
}
typeText();

/* Screens + Music */
const startBtn = document.getElementById("startBtn");
const s1 = document.getElementById("screen1");
const s2 = document.getElementById("screen2");
const s3 = document.getElementById("screen3");
const music = document.getElementById("bgMusic");

/* Global heart container */
const heartContainer = document.getElementById("heart-particles");

/* Create floating hearts */
function createHeart() {
  const heart = document.createElement("span");
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 14 + 12 + "px";
  heart.style.animationDuration = Math.random() * 6 + 10 + "s";

  heartContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 16000);
}

/* Start floating hearts */
setInterval(createHeart, 700);

/* Screen 1 → Screen 2 */
startBtn.onclick = () => {
  music.volume = 0.6;
  music.play();

  s1.classList.remove("active");
  s2.classList.add("active");
};

/* Screen 2 → Screen 3 (tap background only) */
s2.addEventListener("click", (e) => {
  // Only move if user taps the background, not images
  if (e.target === s2) {
    s2.classList.remove("active");
    s3.classList.add("active");
  }
});

/* Prevent image taps from triggering page change */
document.querySelectorAll(".card, .card img").forEach(el => {
  el.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});


/* Cursor heart trail */
document.addEventListener("mousemove", (e) => {
  const heart = document.createElement("div");
  heart.className = "cursor-heart";
  heart.textContent = "💖";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1200);
});
