window.addEventListener('load', function() {
  setTimeout(function() {
    document.querySelector('.preload').classList.remove('preload');
    document.querySelector('.loader').style.display = 'none';
  },0);
});
