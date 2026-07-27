/* ============================================================
   The Organised Types — Header behaviour
   Call window.initHeader() ONCE, right after you inject header.html
   into the page. Scripts inside a fetched HTML string never run
   automatically when set via innerHTML — that's why this lives
   in its own file, loaded normally with <script src="header.js">.
   ============================================================ */
window.initHeader = function initHeader() {
	const siteNav = document.getElementById('siteNav');
	const navToggle = document.getElementById('navToggle');
	const mainNav = document.getElementById('main-nav');

	if (!siteNav) {
		console.warn('initHeader(): #siteNav not found — was header.html injected first?');
		return;
	}

	// blur / condense nav on scroll
	function updateNavScroll() {
		siteNav.classList.toggle('scrolled', window.scrollY > 30);
	}
	window.addEventListener('scroll', updateNavScroll, { passive: true });
	updateNavScroll();

	// mobile menu toggle
	if (navToggle && mainNav) {
		navToggle.addEventListener('click', () => {
			const open = mainNav.classList.toggle('show-menu');
			navToggle.classList.toggle('open', open);
			navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
		});
		// close the menu after tapping a link
		mainNav.querySelectorAll('a').forEach((a) => {
			a.addEventListener('click', () => {
				mainNav.classList.remove('show-menu');
				navToggle.classList.remove('open');
				navToggle.setAttribute('aria-expanded', 'false');
			});
		});
	}

	// highlight the current page in the nav
	const path = window.location.pathname.split('/').pop() || 'index.html';
	const activePage = path.split('.')[0].toLowerCase();
	const activeId = activePage === 'tots-os' ? 'nav-tots-os' : `nav-${activePage}`;
	document.querySelectorAll('#main-nav a').forEach((el) => el.classList.remove('active'));
	const activeLink = document.getElementById(activeId);
	if (activeLink) {
		activeLink.classList.add('active');
	}
};