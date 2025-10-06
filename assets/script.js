
document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('.fade-up');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('reveal');
        io.unobserve(e.target);
      }
    })
  }, {threshold: .12});
  els.forEach(el => io.observe(el));
});
