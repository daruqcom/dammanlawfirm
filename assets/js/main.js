document.addEventListener('DOMContentLoaded', function () {
  if (!('IntersectionObserver' in window)) { return; }
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(function (el) { obs.observe(el); });
});
