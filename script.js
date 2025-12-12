function bindGalleries() {
  document.querySelectorAll('.media-gallery').forEach((gallery) => {
    const slider = gallery.querySelector('.media-gallery__slider');
    if (!slider) return;

    const slides = slider.children.length;
    const counter = gallery.querySelector('.gallery-counter');
    let current = 0;

    function updateSlider() {
      slider.style.transform = `translateX(-${current * 100}%)`;
      if (counter) counter.textContent = `${current + 1}/${slides}`;
    }

    gallery.querySelectorAll('.gallery-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const direction = btn.dataset.direction;
        if (direction === 'next') {
          current = (current + 1) % slides;
        } else {
          current = (current - 1 + slides) % slides;
        }
        updateSlider();
      });
    });
  });
}

bindGalleries();
