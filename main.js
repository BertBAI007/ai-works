// AI WORKS — scroll-animaties (IntersectionObserver, licht en dependency-vrij)
(function(){
  var els = document.querySelectorAll('.fade-up, .fade-in, .slide-left, .slide-right, .stagger');
  if (!('IntersectionObserver' in window)) { els.forEach(function(e){ e.classList.add('visible'); }); return; }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
    });
  }, { threshold: 0.15 });
  els.forEach(function(e){ io.observe(e); });
})();

// nav krimpt subtiel zodra je scrolt + zachte parallax op de hero-gloed
(function(){
  var nv=document.querySelector('nav');
  window.addEventListener('scroll', function(){
    if(nv) nv.classList.toggle('scrolled', window.scrollY>24);
  }, {passive:true});
})();
