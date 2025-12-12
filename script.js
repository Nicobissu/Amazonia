(function () {
  const carousels = document.querySelectorAll('[data-carousel]');

  carousels.forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll('[data-slide]'));
    const dotsContainer = carousel.querySelector('[data-dots]');
    const prevBtn = carousel.querySelector('[data-prev]');
    const nextBtn = carousel.querySelector('[data-next]');
    if (!slides.length || !dotsContainer || !prevBtn || !nextBtn) return;

    let index = 0;
    let startX = 0;
    let deltaX = 0;

    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'dot';
      dot.setAttribute('aria-label', `Ir a imagen ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.querySelectorAll('button'));

    function goTo(newIndex) {
      index = (newIndex + slides.length) % slides.length;
      update();
    }

    function update() {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }

    function onPrev() {
      goTo(index - 1);
    }

    function onNext() {
      goTo(index + 1);
    }

    function onTouchStart(event) {
      startX = event.touches[0].clientX;
    }

    function onTouchMove(event) {
      deltaX = event.touches[0].clientX - startX;
    }

    function onTouchEnd() {
      const threshold = 40;
      if (deltaX > threshold) {
        onPrev();
      } else if (deltaX < -threshold) {
        onNext();
      }
      deltaX = 0;
    }

    prevBtn.addEventListener('click', onPrev);
    nextBtn.addEventListener('click', onNext);

    carousel.addEventListener('touchstart', onTouchStart, { passive: true });
    carousel.addEventListener('touchmove', onTouchMove, { passive: true });
    carousel.addEventListener('touchend', onTouchEnd);

    update();
  });
})();
