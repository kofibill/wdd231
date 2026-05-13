// Last modified date
const lastModifiedEl = document.getElementById('lastModified');
if (lastModifiedEl) {
  const d = new Date(document.lastModified);
  const pad = n => String(n).padStart(2, '0');
  lastModifiedEl.textContent =
    `${pad(d.getMonth()+1)}/${pad(d.getDate())}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

// Hamburger toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mainNav = document.getElementById('mainNav');
if (hamburgerBtn && mainNav) {
  hamburgerBtn.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
  });
}

// Course filter
const courses = [
  { name: 'WDD 130', category: 'wdd', credits: 2 },
  { name: 'WDD 131', category: 'wdd', credits: 2 },
  { name: 'WDD 231', category: 'wdd', credits: 2 },
];

const courseList = document.getElementById('courseList');
const creditTotal = document.getElementById('creditTotal');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderCourses(filter) {
  const filtered = filter === 'all' ? courses : courses.filter(c => c.category === filter);
  const cards = courseList.querySelectorAll('.course-card');
  cards.forEach(card => {
    const cat = card.dataset.category;
    if (filter === 'all' || cat === filter) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
  const total = filtered.reduce((sum, c) => sum + c.credits, 0);
  creditTotal.textContent = `The total credits for course listed above is ${total}`;
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCourses(btn.dataset.filter);
  });
});