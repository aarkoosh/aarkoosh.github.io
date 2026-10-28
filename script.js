document.querySelectorAll('.gallery-track, .gallery-track-reverse').forEach(track => {
  var clone = track.querySelector('.track-set').cloneNode(true);
  clone.setAttribute('aria-hidden', 'true');
  clone.querySelectorAll('img').forEach(function (img) {
    img.setAttribute('alt', '');
  });
  track.appendChild(clone);
});
