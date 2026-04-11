// ===== MOBILE MENU =====
function hamburg() {
  document.querySelector(".dropdown").style.transform = "translateY(0)";
}

function cancel() {
  document.querySelector(".dropdown").style.transform = "translateY(-500px)";
}


// ===== TYPEWRITER EFFECT =====
const texts = ["Developer", "Designer", "Creator", "Student"];
let speed = 100;

let textIndex = 0;
let charIndex = 0;

const textElement = document.querySelector(".typewriter-text");

function typeWriter() {
  if (charIndex < texts[textIndex].length) {
    textElement.innerHTML += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, 1200);
  }
}

function eraseText() {
  if (textElement.innerHTML.length > 0) {
    textElement.innerHTML = textElement.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    charIndex = 0;
    setTimeout(typeWriter, 400);
  }
}

window.onload = typeWriter;


// ===== SMOOTH CURSOR TRAIL =====
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  currentX += (mouseX - currentX) * 0.2;
  currentY += (mouseY - currentY) * 0.2;

  cursor.style.left = currentX + "px";
  cursor.style.top = currentY + "px";

  requestAnimationFrame(animateCursor);
}
animateCursor();


// ===== ACTIVE NAV ON SCROLL =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});


// ===== SCROLL PROGRESS BAR =====
const progressBar = document.createElement("div");
progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "4px";
progressBar.style.background = "#00c6ff";
progressBar.style.zIndex = "9999";
progressBar.style.width = "0%";
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let docHeight = document.body.scrollHeight - window.innerHeight;
  let scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = scrollPercent + "%";
});


// ===== EXTRA SCROLL REVEAL =====
const revealElements = document.querySelectorAll(".project-card, .content, .image");

window.addEventListener("scroll", () => {
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});

// INITIAL STATE
revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  el.style.transition = "0.6s ease";
});
// ===== SKILLS BAR CHART =====
const canvas = document.getElementById("skillsChart");

if (canvas) {
  const ctx = canvas.getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["HTML", "CSS", "JavaScript", "UI/UX", "Python"],
      datasets: [{
        label: "Skill Level",
        data: [95, 90, 70, 80, 98],

        // 🌈 different colors for each bar
        backgroundColor: [
          "#ff4d4d",
          "#4da6ff",
          "#ffd11a",
          "#b366ff",
          "#00e6ac"
        ],

        borderRadius: 8
      }]
    },

    options: {
      responsive: true,
      animation: {
        duration: 1500,   // ⏱ smooth grow animation
        easing: "easeOutQuart"
      },

      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            color: "#ffffff"
          },
          grid: {
            color: "rgba(255,255,255,0.1)"
          }
        },
        x: {
          ticks: {
            color: "#ffffff"
          },
          grid: {
            display: false
          }
        }
      },

      plugins: {
        legend: {
          labels: {
            color: "#ffffff"
          }
        }
      }
    }
  });
}