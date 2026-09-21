document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Populate Config Data
    document.title = `${CONFIG.name} | ${CONFIG.tagline}`;
    document.getElementById('hero-name').textContent = CONFIG.name;
    document.getElementById('hero-tagline').textContent = CONFIG.tagline;
    
    document.getElementById('link-email').href = `mailto:${CONFIG.email}`;
    document.getElementById('link-youtube').href = CONFIG.socials.youtube;
    document.getElementById('link-instagram').href = `https://instagram.com/${CONFIG.socials.instagram.replace('@','')}`;
    document.getElementById('ig-handle').textContent = CONFIG.socials.instagram;
    
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Render Skills
    const skillsContainer = document.getElementById('skills-container');
    CONFIG.skills.forEach(skill => {
        const span = document.createElement('span');
        span.className = 'px-6 py-3 rounded-full border border-white/10 bg-white/5 text-gray-300 font-medium hover:bg-neonPurple hover:text-white hover:border-neonPurple transition-all cursor-pointer neon-badge-hover';
        span.textContent = skill;
        skillsContainer.appendChild(span);
    });

    // Render Video Projects
    const videoGrid = document.getElementById('video-grid');
    CONFIG.videoProjects.forEach(project => {
        videoGrid.innerHTML += createProjectCard(project, 'text-neonPurple', 'border-neonPurple');
    });

    // Render Graphic Projects
    const graphicGrid = document.getElementById('graphic-grid');
    CONFIG.graphicProjects.forEach(project => {
        graphicGrid.innerHTML += createProjectCard(project, 'text-blue-400', 'border-blue-400');
    });

    function createProjectCard(project, textColor, borderColor) {
        return `
            <a href="${project.link}" class="project-card block w-[300px] md:w-[450px] shrink-0 group rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 hover:border-white/30 cursor-pointer">
                <div class="relative h-[200px] md:h-[300px] overflow-hidden">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-darkBg/90 to-transparent"></div>
                    <div class="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                        <div>
                            <span class="text-xs font-bold px-2 py-1 rounded-md border ${borderColor} ${textColor} bg-darkBg/50 mb-2 inline-block shadow-[0_0_8px_currentColor]">${project.category}</span>
                            <h3 class="text-xl md:text-2xl font-bold text-white">${project.title}</h3>
                        </div>
                        <i class="ph-fill ph-play-circle text-4xl text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300"></i>
                    </div>
                </div>
            </a>
        `;
    }

    // 2. Protected Mode
    const overlay = document.getElementById('protected-overlay');
    const mainContent = document.getElementById('main-content');
    const input = document.getElementById('passcode-input');
    const btn = document.getElementById('enter-btn');
    const errorMsg = document.getElementById('passcode-error');

    function unlockPortfolio() {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
            mainContent.classList.remove('opacity-0', 'invisible');
            initAnimations();
        }, 500);
    }

    if (CONFIG.protectedMode.enabled) {
        btn.addEventListener('click', () => {
            if (input.value === CONFIG.protectedMode.passcode) {
                unlockPortfolio();
            } else {
                errorMsg.classList.remove('hidden');
                input.value = '';
                // Shake animation
                input.classList.add('translate-x-2');
                setTimeout(() => input.classList.replace('translate-x-2', '-translate-x-2'), 100);
                setTimeout(() => input.classList.replace('-translate-x-2', 'translate-x-2'), 200);
                setTimeout(() => input.classList.replace('translate-x-2', 'translate-x-0'), 300);
            }
        });

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') btn.click();
        });
    } else {
        unlockPortfolio();
    }


    // 3. Custom Cursor
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = window.innerWidth / 2;
    let followerY = window.innerHeight / 2;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    // Smooth follow loop
    function updateFollower() {
        let dx = mouseX - followerX;
        let dy = mouseY - followerY;
        followerX += dx * 0.1;
        followerY += dy * 0.1;
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
        requestAnimationFrame(updateFollower);
    }
    updateFollower();

    // Add hover effect to links and buttons
    const hoverElements = document.querySelectorAll('a, button, input, .cursor-pointer');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });


    // 4. GSAP Animations (Lando Reveal & Draggable)
    function initAnimations() {
        gsap.registerPlugin(ScrollTrigger, Draggable);

        // Reveal animations
        const revealElements = document.querySelectorAll('.lando-reveal');
        revealElements.forEach(el => {
            gsap.to(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out"
            });
        });

        // Initialize Carousels
        function setupCarousel(carouselId) {
            const track = document.querySelector(`#${carouselId} .carousel-track`);
            if(!track) return;
            
            Draggable.create(track, {
                type: "x",
                bounds: document.getElementById(carouselId),
                inertia: true,
                edgeResistance: 0.8,
                onDragStart: () => {
                    track.style.pointerEvents = "none";
                },
                onDragEnd: () => {
                    track.style.pointerEvents = "auto";
                }
            });
        }

        setupCarousel('video-carousel');
        setupCarousel('graphic-carousel');
    }
});
