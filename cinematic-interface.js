(function () {
  var fallbackHeaderMarkup = [
    '<style>',
    '.fallback-announcement-bar{position:fixed;top:0;left:0;right:0;z-index:999;background:linear-gradient(90deg,#0f0f0f 0%,#1a1a1a 50%,#0f0f0f 100%);border-bottom:1px solid rgba(255,255,255,0.08);}',
    '.fallback-announcement-bar a{display:block;padding:12px 20px;color:#fff;text-align:center;text-decoration:none;font-size:.75rem;font-weight:600;letter-spacing:.25em;text-transform:uppercase;}',
    '.fallback-header{position:fixed;top:44px;left:0;right:0;z-index:998;background:#efe6e1;border-bottom:1px solid rgba(79,74,70,0.12);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);}',
    '.fallback-header.scrolled{box-shadow:0 14px 36px -24px rgba(45,48,44,0.35);}',
    '.fallback-navbar{width:min(1200px, calc(100% - 32px));margin:0 auto;padding:8px 0;display:flex;align-items:center;justify-content:space-between;gap:18px;}',
    '.fallback-logo{display:flex;align-items:center;gap:12px;color:var(--primary-color, #4f4a46);font-family:Space Grotesk,sans-serif;font-weight:700;font-size:1rem;text-decoration:none;}',
    '.fallback-logo img{height:88px;width:auto;display:block;}',
    '.fallback-menu-icon{display:none;cursor:pointer;flex-direction:column;width:30px;}',
    '.fallback-menu-icon span{height:3px;margin:4px 0;background:var(--primary-color, #4f4a46);border-radius:3px;}',
    '#main-nav.fallback-nav{display:flex;align-items:center;gap:24px;}',
    '#main-nav.fallback-nav a{color:var(--primary-color, #4f4a46);text-decoration:none;font-weight:500;white-space:nowrap;position:relative;padding:4px 0;}',
    '#main-nav.fallback-nav a::after{content:"";position:absolute;left:0;right:0;bottom:-2px;height:1px;background:var(--accent-color, #a9b897);transform:scaleX(0);transform-origin:right;transition:transform .3s ease;}',
    '#main-nav.fallback-nav a:hover::after,#main-nav.fallback-nav a.active::after{transform:scaleX(1);transform-origin:left;}',
    '#main-nav.fallback-nav a.active{color:var(--accent-color, #a9b897);}',
    '.fallback-footer{background:var(--logo-bg, #efe6e1);color:var(--primary-color, #4f4a46);text-align:center;font-size:.9em;margin-top:auto;padding:25px 0 15px;}',
    '.fallback-footer a{color:var(--accent-color, #a9b897);text-decoration:none;}',
    '.fallback-footer a:hover{text-decoration:underline;}',
    '.fallback-footer-grid{width:min(1200px, calc(100% - 32px));margin:0 auto;display:grid;grid-template-columns:1fr 1fr 1fr;text-align:left;padding:40px 0;border-bottom:1px solid rgba(79,74,70,0.1);gap:20px;}',
    '.fallback-footer-logo img{height:80px;display:block;margin:0 auto;}',
    '.fallback-footer-section{padding:0 20px;}',
    '.fallback-footer-section h4{font-size:1.1em;color:var(--primary-color, #4f4a46);margin:0 0 10px;font-weight:700;}',
    '.fallback-footer-section p{margin:5px 0;}',
    '.fallback-footer-section ul{list-style:none;padding:0;margin:10px 0;}',
    '.fallback-footer-section li{margin-bottom:5px;}',
    '.fallback-footer-socials,.fallback-footer-legal,.fallback-footer-legal ul{text-align:center;}',
    '.fallback-footer-copy{padding:8px 0;font-size:.75em;}',
    '.fallback-cookie-banner{display:none;position:fixed;bottom:0;left:0;right:0;background:#f5f5f5;padding:15px 10px;text-align:center;box-shadow:0 -2px 8px rgba(0,0,0,0.2);z-index:9999;font-family:Arial,sans-serif;}',
    '.fallback-cookie-banner span{font-size:.9em;}',
    '.fallback-cookie-banner button{margin-left:12px;padding:6px 12px;background-color:#a9b897;border:none;color:white;cursor:pointer;border-radius:4px;font-weight:bold;}',
    '@media (max-width: 768px){.fallback-announcement-bar a{font-size:.65rem;letter-spacing:.15em;padding:10px 16px;}.fallback-header{top:40px;}.fallback-logo img{height:64px;}.fallback-menu-icon{display:flex;}#main-nav.fallback-nav{display:none;position:absolute;top:100%;left:0;right:0;flex-direction:column;align-items:stretch;gap:0;background:#efe6e1;padding:12px 0;box-shadow:0 12px 28px -18px rgba(45,48,44,0.35);}#main-nav.fallback-nav.show-menu{display:flex;}#main-nav.fallback-nav a{padding:12px 24px;text-align:center;border-bottom:1px solid rgba(79,74,70,0.08);}.fallback-footer-grid{grid-template-columns:1fr;padding:20px 0;}.fallback-footer-logo img{height:60px;}.fallback-footer-section{padding:0;text-align:center;}}',
    '</style>',
    '<div class="fallback-announcement-bar"><a href="TOTS-OS.html">Introducing TOTS-OS - Coming Summer 2026. Join the waitlist</a></div>',
    '<header class="fallback-header"><div class="fallback-navbar"><a href="index.html" class="fallback-logo" aria-label="The Organised Types home"><img src="logo.webp" alt="The Organised Types Logo"></a><div class="fallback-menu-icon" onclick="toggleMenu()" aria-label="Open menu" role="button" tabindex="0"><span></span><span></span><span></span></div><nav id="main-nav" class="fallback-nav" aria-label="Primary"><a href="index.html" id="nav-index">Home</a><a href="services.html" id="nav-services">Services</a><a href="portfolio.html" id="nav-portfolio">Portfolio</a><a href="TOTS-OS.html" id="nav-tots-os">TOTS-OS</a><a href="blog.html" id="nav-blog">Blog</a><a href="about.html" id="nav-about">About</a><a href="contact.html" id="nav-contact">Contact</a></nav></div></header>'
  ].join('');

  var fallbackFooterMarkup = [
    '<footer class="fallback-footer">',
    '<div class="fallback-footer-grid">',
    '<div class="fallback-footer-section fallback-footer-logo"><a href="index.html"><img src="logo.webp" alt="The Organised Types Logo"></a></div>',
    '<div class="fallback-footer-section fallback-footer-socials"><h4>Quick Links</h4><ul><li><a href="index.html">Home</a></li><li><a href="services.html">Services</a></li><li><a href="portfolio.html">Portfolio</a></li><li><a href="TOTS-OS.html">TOTS-OS</a></li><li><a href="about.html">About</a></li><li><a href="contact.html">Contact</a></li><li><a href="blog.html">Blog</a></li><li><a href="faq.html">FAQ</a></li></ul></div>',
    '<div class="fallback-footer-section fallback-footer-legal"><h4>Legal &amp; Contact</h4><p style="color:#a9b897;">Email: <a href="mailto:theorganisedtypes@gmail.com">theorganisedtypes@gmail.com</a></p><ul><li><a href="t&cs.html">Terms &amp; Conditions</a></li><li><a href="privacypolicy.html">Privacy Policy</a></li><li><a href="cookiepolicy.html">Cookie Policy</a></li><li><a href="refundpolicy.html">Refund Policy</a></li><li><a href="gdpr.html">GDPR &amp; Data Protection</a></li><li><a href="accessibility.html">Accessibility Statement</a></li><li><a href="https://www.instagram.com/theorganisedtypes/" target="_blank">Instagram</a></li></ul></div>',
    '</div>',
    '<div class="fallback-footer-copy"><div style="width:min(1200px, calc(100% - 32px));margin:0 auto;"><p>&copy; 2026 The Organised Types. All Rights Reserved.</p></div></div>',
    '</footer>',
    '<div id="cookie-banner" class="fallback-cookie-banner"><span>We use cookies to improve your experience. <a href="cookiepolicy.html" target="_blank" style="color:#a9b897; text-decoration: underline;">Read our Cookies Policy</a></span><button id="accept-cookies">Accept</button></div>'
  ].join('');

  function ensureHeaderFallback() {
    var host = document.getElementById('site-header');
    if (!host) return;

    if (!host.querySelector('header')) {
      host.innerHTML = fallbackHeaderMarkup;
    }
  }

  function ensureFooterFallback() {
    var host = document.getElementById('site-footer');
    if (!host) return;

    if (!host.querySelector('footer')) {
      host.innerHTML = fallbackFooterMarkup;
    }
  }

  function bindCookieBanner() {
    var banner = document.getElementById('cookie-banner');
    var acceptButton = document.getElementById('accept-cookies');

    if (!banner || !acceptButton) return;

    if (!localStorage.getItem('cookiesAccepted')) {
      banner.style.display = 'block';
    }

    if (!acceptButton.dataset.bound) {
      acceptButton.addEventListener('click', function () {
        localStorage.setItem('cookiesAccepted', 'true');
        banner.style.display = 'none';
      });
      acceptButton.dataset.bound = 'true';
    }
  }

  function setActiveLink() {
    var nav = document.getElementById('main-nav');
    if (!nav) return;

    var path = window.location.pathname.split('/').pop() || 'index.html';
    var page = path.split('.')[0].toLowerCase();
    var id = page === 'tots-os' ? 'nav-tots-os' : 'nav-' + page;

    nav.querySelectorAll('a').forEach(function (el) {
      el.classList.remove('active');
    });

    var active = document.getElementById(id);
    if (active) active.classList.add('active');
  }

  function bindHeaderScroll() {
    var header = document.querySelector('#site-header header');
    if (!header) return;

    var update = function () {
      header.classList.toggle('scrolled', window.scrollY > 40);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  function bindReveal() {
    var revealEls = document.querySelectorAll('.reveal:not(.in), .reveal-scale:not(.in)');
    if (!revealEls.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });

    revealEls.forEach(function (el) { io.observe(el); });
  }

  window.toggleMenu = function () {
    var nav = document.getElementById('main-nav');
    if (nav) nav.classList.toggle('show-menu');
  };

  window.toggleDropdown = function () {
    return;
  };

  var tryInit = function () {
    ensureHeaderFallback();
    ensureFooterFallback();
    setActiveLink();
    bindHeaderScroll();
    bindReveal();
    bindCookieBanner();
  };

  document.addEventListener('DOMContentLoaded', tryInit);
  window.addEventListener('load', tryInit);
})();