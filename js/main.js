// =====================================================================
// MAIN.JS — Sabbir Adnan Portfolio (fully config-driven)
// =====================================================================

document.addEventListener('DOMContentLoaded', () => {
    const C = window.PORTFOLIO_CONFIG;
    if (!C) return;

    // ── CSS Vars ─────────────────────────────────────────────────────
    document.documentElement.style.setProperty('--accent', C.accentColor);

    // ── Hero ─────────────────────────────────────────────────────────
    const qS = (s) => document.querySelector(s);
    if (qS('.hero-name'))    qS('.hero-name').textContent    = C.name;
    if (qS('.hero-tagline')) qS('.hero-tagline').textContent = C.tagline;

    // ── Bio ──────────────────────────────────────────────────────────
    const bioEl = document.getElementById('about-bio');
    if (bioEl && C.bio) bioEl.innerHTML = C.bio;

    // ── Protection ──────────────────────────────────────────────────
    document.addEventListener('contextmenu', e => {
        if (['IMG','VIDEO'].includes(e.target.tagName)) e.preventDefault();
    });
    document.addEventListener('dragstart', e => {
        if (e.target.tagName === 'IMG') e.preventDefault();
    });

    // ── Mobile Nav ───────────────────────────────────────────────────
    const navToggle = qS('.nav-toggle');
    const navLinks  = qS('.nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('open');
            navLinks.classList.toggle('open');
        });
        navLinks.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                navToggle.classList.remove('open');
                navLinks.classList.remove('open');
            });
        });
    }

    // ── Custom Cursor (mouse devices only) ───────────────────────────
    const dot     = qS('.cursor-dot');
    const outline = qS('.cursor-outline');
    if (dot && outline && window.matchMedia('(pointer:fine)').matches) {
        let mx = innerWidth/2, my = innerHeight/2, ox = mx, oy = my;
        window.addEventListener('mousemove', e => {
            mx = e.clientX; my = e.clientY;
            dot.style.transform = `translate(${mx}px,${my}px)`;
        }, {passive: true});
        document.querySelectorAll('a,button,.carousel-container').forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'), {passive:true});
            el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'), {passive:true});
        });
        (function tick() {
            ox += (mx - ox) * 0.25;
            oy += (my - oy) * 0.25;
            outline.style.transform = `translate(${ox}px,${oy}px)`;
            requestAnimationFrame(tick);
        })();
    }

    // ── Icon SVG helpers ─────────────────────────────────────────────
    const SVGS = {
        yt:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"/></svg>`,
        be:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>`,
        fb:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>`,
        gd:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.71 3.5L1.15 15l3.43 6 6.55-11.5M9.73 3.5h13.12l-3.43 6H6.3M22.85 15l-3.43-6-6.56 11.5h13.13"/></svg>`,
        tg:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.288-4.12 7.48-6.76c.324-.29-.074-.452-.505-.162L7.87 12.18l-3.98-1.25c-.868-.27-.887-.87.18-1.29l15.584-6c.72-.27 1.35.15 1.144 1.25z"/></svg>`,
        email:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
        ig:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
        wa:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`
    };

    // ── Video Carousel ───────────────────────────────────────────────
    const videoCarousel = document.getElementById('video-carousel');
    if (videoCarousel && C.videoProjects) {
        C.videoProjects.forEach(p => {
            const card = document.createElement('div');
            card.className = 'gallery-card video-card card-hover-fx';
            card.innerHTML = `
                <span class="neon-glow">${p.category}</span>
                <img src="${p.thumbnail}" alt="${p.title}" loading="lazy" class="card-thumb"/>
                <div class="watermark-overlay"></div>
                <div class="card-overlay"></div>
                <div class="card-content-bottom">
                    <h3 class="card-bottom-title">${p.title}</h3>
                    <p class="card-bottom-desc">${p.subtitle}</p>
                </div>`;
            // Clicking card → opens URL
            card.addEventListener('click', () => window.open(p.url, '_blank', 'noopener'));
            card.style.cursor = 'pointer';
            videoCarousel.appendChild(card);
        });
    }

    // ── Design Carousel ──────────────────────────────────────────────
    const designCarousel = document.getElementById('design-carousel');
    if (designCarousel && C.designProjects) {
        C.designProjects.forEach(p => {
            const card = document.createElement('div');
            card.className = 'gallery-card design-card card-hover-fx';
            card.innerHTML = `
                <span class="neon-glow">${p.category}</span>
                <img src="${p.thumbnail}" alt="${p.title}" loading="lazy" class="card-thumb"/>
                <div class="watermark-overlay"></div>
                <div class="design-card-overlay">
                    <h3>${p.title}</h3>
                    <p>${p.subtitle}</p>
                </div>`;
            card.addEventListener('click', () => window.open(p.url, '_blank', 'noopener'));
            card.style.cursor = 'pointer';
            designCarousel.appendChild(card);
        });
    }

    // ── Skill Proof Grid ─────────────────────────────────────────────
    const skillGrid = document.getElementById('skill-grid');
    if (skillGrid && C.skillLinks) {
        C.skillLinks.forEach(s => {
            const tag  = s.linked ? 'a' : 'div';
            const el   = document.createElement(tag);
            el.className = 'proof-card';
            if (s.linked && s.url) { el.href = s.url; el.target = '_blank'; el.rel = 'noopener'; }
            el.innerHTML = `
                <div class="proof-header">
                    <div class="proof-icon ${s.icon}-icon">${SVGS[s.icon] || ''}</div>
                    <span class="proof-badge ${s.linked ? 'linked' : 'unlinked'}">${s.linked ? 'LINKED' : 'UNLINKED'}</span>
                </div>
                <h3 class="proof-title">${s.platform}</h3>
                <p class="proof-subtitle">${s.subtitle}</p>
                <p class="proof-desc">${s.desc}</p>`;
            skillGrid.appendChild(el);
        });
    }

    // ── Contact Cards Grid ───────────────────────────────────────────
    const contactGrid = document.getElementById('contact-grid');
    if (contactGrid && C.contactLinks) {
        C.contactLinks.forEach(c => {
            const el = document.createElement('a');
            el.className = `contact-card cc-${c.icon}`;
            el.href = c.url;
            el.target = '_blank';
            el.rel = 'noopener';
            if (c.url.startsWith('mailto:')) el.removeAttribute('target');
            el.innerHTML = `
                <div class="contact-icon">${SVGS[c.icon] || ''}</div>
                <span class="contact-name">${c.label}</span>
                <span class="contact-hint">${c.hint}</span>`;
            contactGrid.appendChild(el);
        });
    }

    // ── Carousel (Drag + Touch + Momentum + Center Focus) ────────────
    function initCarousel(wrapper) {
        const container = wrapper.querySelector('.carousel-container');
        if (!container) return;
        const cards  = container.querySelectorAll('.gallery-card');
        const prevBtn = wrapper.querySelector('.arrow-prev');
        const nextBtn = wrapper.querySelector('.arrow-next');
        let isDown = false, startX = 0, scrollLeft = 0, velX = 0, mid;

        // Hint nudge on load
        setTimeout(() => {
            container.scrollBy({left:120,behavior:'smooth'});
            setTimeout(() => container.scrollBy({left:-120,behavior:'smooth'}), 700);
        }, 1600);

        const amt = () => window.innerWidth > 768 ? 620 : 320;
        if (prevBtn) prevBtn.addEventListener('click', () => container.scrollBy({left:-amt(),behavior:'smooth'}));
        if (nextBtn) nextBtn.addEventListener('click', () => container.scrollBy({left:amt(),behavior:'smooth'}));

        function focus() {
            const cc = container.getBoundingClientRect().left + container.offsetWidth / 2;
            let best = null, minD = Infinity;
            cards.forEach(c => {
                const r = c.getBoundingClientRect();
                const d = Math.abs(r.left + r.width / 2 - cc);
                c.classList.remove('focused');
                if (d < minD) { minD = d; best = c; }
            });
            if (best) best.classList.add('focused');
        }

        let ft;
        container.addEventListener('scroll', () => { clearTimeout(ft); ft = setTimeout(focus, 60); }, {passive:true});
        setTimeout(focus, 600);

        // Mouse drag
        container.addEventListener('mousedown', e => {
            if (e.target.closest('a,button')) return;
            isDown = true;
            document.body.classList.add('cursor-hover');
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
            cancelAnimationFrame(mid);
        });
        window.addEventListener('mouseup', () => {
            if (!isDown) return;
            isDown = false;
            document.body.classList.remove('cursor-hover');
            momentum();
        });
        container.addEventListener('mousemove', e => {
            if (!isDown) return;
            e.preventDefault();
            const dx = (e.pageX - container.offsetLeft - startX) * 1.5;
            const prev = container.scrollLeft;
            container.scrollLeft = scrollLeft - dx;
            velX = container.scrollLeft - prev;
            focus();
        });

        // Touch swipe
        container.addEventListener('touchstart', e => {
            if (e.target.closest('a,button')) return;
            isDown = true;
            startX = e.touches[0].pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
            cancelAnimationFrame(mid);
        }, {passive:true});
        container.addEventListener('touchend', () => { if(isDown){isDown=false; momentum();} });
        container.addEventListener('touchmove', e => {
            if (!isDown) return;
            const dx = (e.touches[0].pageX - container.offsetLeft - startX) * 1.5;
            const prev = container.scrollLeft;
            container.scrollLeft = scrollLeft - dx;
            velX = container.scrollLeft - prev;
            focus();
        }, {passive:true});

        // Wheel
        container.addEventListener('wheel', e => {
            if (e.deltaY && Math.abs(e.deltaX) < 10) { e.preventDefault(); container.scrollLeft += e.deltaY * 1.5; }
        }, {passive:false});

        function momentum() {
            container.scrollLeft += velX;
            velX *= 0.92;
            focus();
            if (Math.abs(velX) > 0.5) mid = requestAnimationFrame(momentum);
        }
    }
    document.querySelectorAll('.carousel-wrapper').forEach(initCarousel);

    // ── Nav scroll effect ─────────────────────────────────────────────
    const navbar = document.getElementById('navbar');
    if (navbar) window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', scrollY > 30), {passive:true});

    // ── IntersectionObserver for all animations ───────────────────────
    const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, {threshold: 0.15});
    document.querySelectorAll('.reveal-up,.slide-in-left').forEach(el => io.observe(el));

    // ── Footer year ───────────────────────────────────────────────────
    const yr = document.getElementById('year');
    if (yr) yr.textContent = new Date().getFullYear();
});
