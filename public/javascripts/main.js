window.addEventListener('load', init);

function init() {
  document.querySelector('.preload').classList.remove('preload');
  document.querySelector('.loader').style.display = 'none';
  loop();
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
      (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight))
  );
}

function loop() {
  let cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    if (isElementInViewport(card)) card.classList.add('float-up');
  });
  let animationDescriptor = window.requestAnimationFrame(loop);
  if (Array.from(cards).every(card => card.classList.contains('float-up'))) window.cancelAnimationFrame(animationDescriptor);
}