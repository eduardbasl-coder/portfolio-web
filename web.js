// =========================
// FADE OUT PŘI PŘECHODU
// =========================

document.querySelectorAll('a').forEach(link => {

  link.addEventListener('click', function(e) {

    const url = this.href;

    // ignoruj externí odkazy
    if (!url.includes(window.location.hostname)) return;

    e.preventDefault();

    document.body.classList.add('fade-out');

    setTimeout(() => {
      window.location.href = url;
    }, 400);

  });

});


// =========================
// PROGRESS BARY
// =========================

const bars = document.querySelectorAll('.bar');

const progressObserver = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      const bar = entry.target;
      const width = bar.getAttribute('data-width');

      bar.style.width = width;

      progressObserver.unobserve(bar);

    }

  });

}, {
  threshold: 0.5
});

bars.forEach(bar => {
  progressObserver.observe(bar);
});


// =========================
// SCROLL ANIMACE
// =========================

const animatedItems = document.querySelectorAll(
  '.card, .ruby-column, .blog-card, .news-card, .project-box, .service-card'
);

const animationObserver = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      entry.target.classList.add('show');

      // optional:
      animationObserver.unobserve(entry.target);

    }

  });

}, {
  threshold: 0.15
});

animatedItems.forEach((item) => {
  animationObserver.observe(item);
});

