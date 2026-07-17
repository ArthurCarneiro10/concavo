/* Côncavo — comportamentos compartilhados (sem dependências) */
(function () {
  'use strict';

  var reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;

  /* ano no rodapé */
  document.querySelectorAll('[data-yr]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* topo: estado "scrolled" */
  var top = document.querySelector('.top');
  if (top) {
    var onScrollTop = function () { top.classList.toggle('scrolled', window.scrollY > 24); };
    onScrollTop();
    addEventListener('scroll', onScrollTop, { passive: true });
  }

  /* topo: inverte sobre seções escuras */
  if (top) {
    var darks = document.querySelectorAll('[data-dark]');
    if (darks.length) {
      var spy = function () {
        var y = 34, over = false;
        for (var i = 0; i < darks.length; i++) {
          var r = darks[i].getBoundingClientRect();
          if (r.top <= y && r.bottom >= y) { over = true; break; }
        }
        top.classList.toggle('on-dark', over);
      };
      spy();
      addEventListener('scroll', spy, { passive: true });
      addEventListener('resize', spy);
    }
  }

  /* menu (3 palitos) */
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('.menu');
  if (burger && menu) {
    var links = menu.querySelectorAll('nav a');
    var setMenu = function (open) {
      menu.classList.toggle('open', open);
      burger.classList.toggle('x', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
      links.forEach(function (a, i) {
        a.style.transitionDelay = open ? (0.16 + i * 0.055) + 's' : '0s';
      });
    };
    burger.addEventListener('click', function () { setMenu(!menu.classList.contains('open')); });
    links.forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  }

  /* a ilha */
  var island = document.querySelector('.island');
  if (island) {
    var toggle = island.querySelector('.island-toggle');
    var setIsland = function (open) {
      island.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    toggle.addEventListener('click', function () { setIsland(!island.classList.contains('open')); });

    /* fecha ao clicar fora / Esc */
    addEventListener('click', function (e) {
      if (island.classList.contains('open') && !island.contains(e.target)) setIsland(false);
    });
    addEventListener('keydown', function (e) { if (e.key === 'Escape') setIsland(false); });

    /* esconde ao descer, revela ao subir — nunca esconde aberta */
    var last = window.scrollY, ticking = false;
    addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.scrollY;
        var atBottom = y + innerHeight >= document.body.scrollHeight - 90;
        if (!island.classList.contains('open')) {
          island.classList.toggle('hide', y > last + 6 && y > 260 && !atBottom);
        }
        last = y;
        ticking = false;
      });
    }, { passive: true });
  }

  /* reveals */
  var rv = document.querySelectorAll('.reveal');
  if (rv.length) {
    if (reduce || !('IntersectionObserver' in window)) {
      rv.forEach(function (el) { el.classList.add('in'); });
    } else {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
      rv.forEach(function (el) { io.observe(el); });
    }
  }
})();
