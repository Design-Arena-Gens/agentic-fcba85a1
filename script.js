// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('show');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Pricing toggle
const toggleButtons = document.querySelectorAll('.toggle-btn');
const priceGrid = document.querySelector('.price-grid');
if (toggleButtons.length && priceGrid) {
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const interval = btn.dataset.interval;
      priceGrid.dataset.interval = interval;
      document.querySelectorAll('.price-value').forEach(el => {
        const hourly = el.getAttribute('data-hourly');
        const monthly = el.getAttribute('data-monthly');
        el.textContent = interval === 'monthly' ? monthly : hourly;
      });
      document.querySelectorAll('.unit').forEach(u => u.textContent = interval === 'monthly' ? '/mo' : '/hr');
    });
  });
}

// Year footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Decorative orbits placement
const orbit = document.querySelector('.orbit');
if (orbit) {
  const dots = orbit.querySelectorAll('.orbit-dot');
  dots.forEach((d, i) => {
    const angle = (i / dots.length) * Math.PI * 2;
    const r = 160; // match CSS translateX
    const x = Math.cos(angle) * r;
    const y = Math.sin(angle) * r;
    d.style.transform = `translate(${x}px, ${y}px)`;
  });
}
