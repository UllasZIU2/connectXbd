// Particle Canvas Script
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

let width = window.innerWidth;
let height = 400; // Limited to Hero Section
canvas.width = width;
canvas.height = height;

const icons = ["🔧", "🪛", "🔨", "⚙", "🔩"];
const particles = [];

for (let i = 0; i < 30; i++) {
  particles.push({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 30 + 20,
    icon: icons[Math.floor(Math.random() * icons.length)],
    speedX: Math.random() * 0.6 - 0.3,
    speedY: Math.random() * 0.6 - 0.3
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, width, height);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  particles.forEach(p => {
    ctx.font = `${p.size}px Arial`;
    ctx.fillText(p.icon, p.x, p.y);

    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x > width) p.x = 0;
    if (p.x < 0) p.x = width;
    if (p.y > height) p.y = 0;
    if (p.y < 0) p.y = height;
  });

  requestAnimationFrame(drawParticles);
}

drawParticles();

// Update canvas on resize
window.addEventListener('resize', () => {
  width = window.innerWidth;
  height = 400;
  canvas.width = width;
  canvas.height = height;
});
// Installation Section Click Behavior
document.querySelectorAll("#services .service-card").forEach(card => {
    card.addEventListener("click", function(e) {
      e.preventDefault();
      const serviceType = this.dataset.service;
      const allCards = document.querySelectorAll("#services .service-card");
      const allPanels = document.querySelectorAll(".service-panel");
      const overlay = document.querySelector(".overlay");
  
      // Remove active classes
      allCards.forEach(c => c.classList.remove('active'));
      allPanels.forEach(p => p.classList.remove('active'));
  
      // Activate selected card and panel
      this.classList.add('active');
      document.querySelector(`.service-panel[data-panel="${serviceType}"]`).classList.add('active');
      overlay.classList.add('active');
    });
  });
  
  // Overlay Click Close (Installation)
  document.querySelector(".overlay").addEventListener("click", () => {
    document.querySelectorAll("#services .service-card, .service-panel").forEach(el => {
      el.classList.remove('active');
    });
    document.querySelector(".overlay").classList.remove('active');
});
// Repair Section Click Behavior
document.querySelectorAll("#repair .service-card").forEach(card => {
    card.addEventListener("click", function(e) {
      e.preventDefault();
      const serviceType = this.dataset.service;
      const section = this.closest('.repair-section');
  
      section.querySelectorAll('.service-card, .repair-panel').forEach(el => {
        el.classList.remove('active');
      });
  
      this.classList.add('active');
      section.querySelector(`.repair-panel[data-panel="${serviceType}"]`).classList.add('active');
      section.querySelector('.repair-overlay').classList.add('active');
    });
  });
  
  // Overlay Click Close (Repair)
  document.querySelectorAll('.repair-overlay').forEach(overlay => {
    overlay.addEventListener('click', function() {
      const section = this.closest('.repair-section');
      section.querySelectorAll('.service-card, .repair-panel').forEach(el => {
        el.classList.remove('active');
      });
      this.classList.remove('active');
    });
});
// Counter Animation
function animateCounter(id, target) {
    const counter = document.getElementById(id);
    let count = 0;
    const increment = target / 100;
  
    function updateCounter() {
      count += increment;
      if (count < target) {
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target;
      }
    }
  
    updateCounter();
  }
  
  window.addEventListener('load', () => {
    animateCounter('projects', 500);
    animateCounter('clients', 1200);
    animateCounter('experience', 10);
});
// Counter Animation
function animateCounter(id, target) {
    const counter = document.getElementById(id);
    let count = 0;
    const increment = target / 100;
  
    function updateCounter() {
      count += increment;
      if (count < target) {
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target;
      }
    }
  
    updateCounter();
  }
  
  window.addEventListener('load', () => {
    animateCounter('projects', 500);
    animateCounter('clients', 1200);
    animateCounter('experience', 10);
});
// Back to Top Button
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});
// Initialize AOS Animation
AOS.init({
    duration: 1000,
    once: true
});
// When user clicks on overlay, close everything automatically
document.querySelector(".overlay").addEventListener("click", () => {
    document.querySelectorAll("#services .service-card, .service-panel").forEach(el => {
      el.classList.remove('active');
    });
    document.querySelector(".overlay").classList.remove('active');
  });
  
  // Same for repair overlay
  document.querySelectorAll('.repair-overlay').forEach(overlay => {
    overlay.addEventListener('click', function() {
      const section = this.closest('.repair-section');
      section.querySelectorAll('.service-card, .repair-panel').forEach(el => {
        el.classList.remove('active');
      });
      this.classList.remove('active');
    });
});
  
  
  