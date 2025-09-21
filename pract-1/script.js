// Digital clock logic
function updateClock() {
  const clock = document.getElementById('digitalClock');
  if (clock) {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    clock.textContent = `${h}:${m}:${s}`;
  }
}
setInterval(updateClock, 1000);
document.addEventListener('DOMContentLoaded', updateClock);

// Contact form logic
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const contactSuccess = document.getElementById('contactSuccess');
  if (contactForm && contactSuccess) {
    contactForm.onsubmit = function(e) {
      e.preventDefault();
      // Simple validation (HTML5 required already covers most)
      contactSuccess.style.display = 'block';
      contactForm.reset();
      setTimeout(() => { contactSuccess.style.display = 'none'; }, 3500);
    };
  }
});
const bgColors = [
  '#121212',
  '#222',
  '#00b7ff',
  '#ff003c',
  'linear-gradient(120deg, #00f2fe 0%, #ff003c 100%)'
];
let bgColorIdx = 0;
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('bgChangeBtn');
  if (btn) {
    btn.addEventListener('click', function() {
      document.body.style.background = bgColors[bgColorIdx];
      bgColorIdx = (bgColorIdx + 1) % bgColors.length;
    });
  }
});
// Set current year in centered footer
document.addEventListener('DOMContentLoaded', function() {
  var yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  // Smooth scroll for navbar links
  window.scrollToSection = function(event, sectionId) {
    event.preventDefault();
    var section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
});
// Counter logic
let counterValue = 0;
function changeCounter(delta) {
	counterValue += delta;
	document.getElementById('counter-value').textContent = counterValue;
}
