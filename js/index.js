const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

const target = document.querySelector('header');
var scrollToTopBtn = document.querySelector('.scrollToTopBtn');
const rootElement = document.documentElement;

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function callback(entries, observer) {
  // The callback will return an array of entries, even if you are only observing a single item
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Show button
      scrollToTopBtn.classList.remove('showBtn');
    } else {
      // Hide button
      scrollToTopBtn.classList.add('showBtn');
    }
  });
}

scrollToTopBtn.addEventListener('click', scrollToTop);
let observer = new IntersectionObserver(callback);
observer.observe(target);
