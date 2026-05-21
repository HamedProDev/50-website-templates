// Particle System
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

let particles = [];
let mouseX = 0;
let mouseY = 0;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2.5 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.8;
    this.speedY = (Math.random() - 0.5) * 0.8;
    this.opacity = Math.random() * 0.6 + 0.1;
    this.hue = Math.random() > 0.5 ? 250 : 180;
    this.saturation = 60 + Math.random() * 30;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 150) {
      const force = (150 - dist) / 150;
      this.x -= dx * force * 0.02;
      this.y -= dy * force * 0.02;
    }

    if (this.x < 0 || this.x > canvas.width ||
        this.y < 0 || this.y > canvas.height) {
      this.reset();
      if (this.x < 0) this.x = canvas.width;
      if (this.x > canvas.width) this.x = 0;
      if (this.y < 0) this.y = canvas.height;
      if (this.y > canvas.height) this.y = 0;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${this.hue}, ${this.saturation}%, 70%, ${this.opacity})`;
    ctx.fill();
    ctx.shadowBlur = 10;
    ctx.shadowColor = `hsla(${this.hue}, ${this.saturation}%, 70%, ${this.opacity * 0.5})`;
  }
}

function createParticles(count) {
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }
}

function connectParticles() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `hsla(250, 60%, 70%, ${0.08 * (1 - dist / 120)})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  connectParticles();
  requestAnimationFrame(animateParticles);
}

createParticles(120);
animateParticles();

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

document.addEventListener('touchmove', (e) => {
  mouseX = e.touches[0].clientX;
  mouseY = e.touches[0].clientY;
});

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 150;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${current}`) {
      item.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav);

// Animated counters
function animateCounters() {
  const counters = document.querySelectorAll('.stat-num');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const increment = target / 80;
    
    function updateCounter() {
      const current = parseInt(counter.innerText);
      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target + '+';
      }
    }
    updateCounter();
  });
}

// Intersection Observer for skill bars and counters
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('skill')) {
        const fill = entry.target.querySelector('.bar-fill');
        if (fill) {
          fill.style.setProperty('--fill', fill.getAttribute('data-width') + '%');
          fill.classList.add('animated');
        }
      }
      if (entry.target.classList.contains('about-stats')) {
        animateCounters();
      }
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.skill').forEach(skill => observer.observe(skill));
const statsSection = document.querySelector('.about-stats');
if (statsSection) observer.observe(statsSection);

// Reveal animations
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .skill-category, .about-grid > *, .contact-content, .section-header').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// 3D Tilt Effect on Project Cards
const tiltCards = document.querySelectorAll('[data-tilt]');

tiltCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / centerY * -8;
    const rotateY = (x - centerX) / centerX * 8;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.transition = 'transform 0.1s ease-out';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    card.style.transition = 'transform 0.6s ease-out';
  });
});

// Parallax effect on hero
document.addEventListener('mousemove', (e) => {
  const hero = document.querySelector('.hero-content');
  if (!hero) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 8;
  const y = (e.clientY / window.innerHeight - 0.5) * 8;
  hero.style.transform = `translate(${x}px, ${y}px)`;
});

// Typing effect for subtitle
function typeEffect() {
  const subtitle = document.querySelector('.hero-subtitle');
  if (!subtitle) return;
  const text = subtitle.textContent;
  subtitle.textContent = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      subtitle.textContent += text.charAt(i);
      i++;
      setTimeout(type, 40);
    }
  }
  setTimeout(type, 1000);
}

typeEffect();

// Smooth reveal on load
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
