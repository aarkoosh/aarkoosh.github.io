document.querySelectorAll('.gallery-track, .gallery-track-reverse').forEach(track => {
  var clone = track.querySelector('.track-set').cloneNode(true);
  clone.setAttribute('aria-hidden', 'true');
  clone.querySelectorAll('img').forEach(function (img) {
    img.setAttribute('alt', '');
  });
  track.appendChild(clone);
});

var contactModal = document.getElementById('contactModal');

document.getElementById('contactButton').addEventListener('click', function () {
  contactModal.showModal();
});

document.getElementById('contactModalClose').addEventListener('click', function () {
  contactModal.close();
});

contactModal.addEventListener('click', function (e) {
  var rect = contactModal.getBoundingClientRect();
  var clickedOutside = (
    e.clientY < rect.top || e.clientY > rect.bottom ||
    e.clientX < rect.left || e.clientX > rect.right
  );
  if (clickedOutside) contactModal.close();
});