document.querySelectorAll('.gallery-track, .gallery-track-reverse').forEach(track => {
  var clone = track.querySelector('.track-set').cloneNode(true);
  clone.setAttribute('aria-hidden', 'true');
  clone.querySelectorAll('img').forEach(function (img) {
    img.setAttribute('alt', '');
  });
  track.appendChild(clone);
});

document.querySelectorAll('dialog.modal').forEach(modal => {
  modal.addEventListener('click', function (e) {
    var rect = modal.getBoundingClientRect();
    var clickedOutside = (
      e.clientY < rect.top || e.clientY > rect.bottom ||
      e.clientX < rect.left || e.clientX > rect.right
    );
    if (clickedOutside) modal.close();
  });
});

function plusDivs(n, group) {
  var slideshow = document.querySelector('[data-slideshow="' + group + '"]');
  if (!slideshow) return;

  var slides = slideshow.querySelectorAll('.slideshow-img-container');
  if (!slides.length) return;

  var current = 0;
  slides.forEach(function (slide, i) {
    if (slide.style.display === 'block') current = i;
  });

  var next = (current + n + slides.length) % slides.length;

  slides.forEach(function (slide) { slide.style.display = 'none'; });
  slides[next].style.display = 'block';
}

document.querySelectorAll('[data-slideshow]').forEach(function (slideshow) {
  var slides = slideshow.querySelectorAll('.slideshow-img-container');
  slides.forEach(function (slide, i) { slide.style.display = i === 0 ? 'block' : 'none'; });
});
