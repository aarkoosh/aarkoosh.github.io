document.querySelectorAll('.gallery-track, .gallery-track-reverse').forEach(track => {
  var clone = track.querySelector('.track-set').cloneNode(true);
  clone.setAttribute('aria-hidden', 'true');
  clone.querySelectorAll('img').forEach(function (img) {
    img.setAttribute('alt', '');
  });
  track.appendChild(clone);
});

var layout = document.querySelector('.layout');
var resizer = document.querySelector('.layout-resizer');

if (layout && resizer) {
  var dragging = false;

  function columnLimits() {
    var width = layout.getBoundingClientRect().width;
    return { min: 16 * 16, max: Math.max(16 * 16, width - 20 * 16) };
  }

  function setColumnWidth(next) {
    var limits = columnLimits();
    var width = Math.min(Math.max(next, limits.min), limits.max);
    layout.style.setProperty('--layout-side', width + 'px');
  }

  resizer.addEventListener('pointerdown', function (event) {
    if (getComputedStyle(resizer).display === 'none') return;
    dragging = true;
    layout.classList.add('is-resizing');
    resizer.setPointerCapture(event.pointerId);
    event.preventDefault();
  });

  resizer.addEventListener('pointermove', function (event) {
    if (!dragging) return;
    setColumnWidth(event.clientX - layout.getBoundingClientRect().left);
  });

  function stopDragging() {
    dragging = false;
    layout.classList.remove('is-resizing');
  }

  resizer.addEventListener('pointerup', stopDragging);
  resizer.addEventListener('pointercancel', stopDragging);

  resizer.addEventListener('keydown', function (event) {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    var current = layout.querySelector('.layout-skillset').getBoundingClientRect().width;
    var delta = event.key === 'ArrowRight' ? 24 : -24;
    setColumnWidth(current + delta);
    event.preventDefault();
  });
}
