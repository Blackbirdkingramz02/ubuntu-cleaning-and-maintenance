(function(){
  // Scroll-reveal for [data-animate] elements
  var els = document.querySelectorAll('[data-animate]');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function(el){ io.observe(el); });
  } else {
    els.forEach(function(el){ el.classList.add('in-view'); });
  }

  // Animated counters
  var counters = document.querySelectorAll('[data-counter]');
  function animateCounter(el){
    var target = parseInt(el.getAttribute('data-target'), 10) || 0;
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 1100;
    var start = null;
    function step(ts){
      if(!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var val = Math.round(eased * target);
      el.textContent = prefix + val.toLocaleString('en-ZA') + suffix;
      if(progress < 1){ requestAnimationFrame(step); }
    }
    requestAnimationFrame(step);
  }
  if('IntersectionObserver' in window && counters.length){
    var cio = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          animateCounter(entry.target);
          cio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(function(el){ cio.observe(el); });
  } else {
    counters.forEach(function(el){
      var target = parseInt(el.getAttribute('data-target'),10) || 0;
      el.textContent = (el.getAttribute('data-prefix')||'') + target;
    });
  }
})();
