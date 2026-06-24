/**
 * Portfolio - Enhanced JavaScript
 * Features: Scroll reveal, 3D card tilt, skill badges, section highlighting
 */

document.addEventListener('DOMContentLoaded', function () {

    // =========================================================
    // 1. SCROLL-REVEAL ANIMATION
    //    Uses IntersectionObserver for smooth, staggered reveal
    // =========================================================

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    // Observe sections with stagger delay for items inside
    document.querySelectorAll('.subject').forEach(section => {
        revealObserver.observe(section);

        // Stagger the items inside each section
        section.querySelectorAll('.item').forEach((item, i) => {
            item.style.transitionDelay = `${i * 80}ms`;
            revealObserver.observe(item);
        });
    });


    // =========================================================
    // 2. 3D CARD TILT EFFECT (subtle, GPU-efficient)
    // =========================================================

    const TILT_MAX = 4; // max degrees of tilt

    function applyTilt(card, e) {
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / (rect.width / 2);
        const dy = (e.clientY - cy) / (rect.height / 2);

        const rotateX = (-dy * TILT_MAX).toFixed(2);
        const rotateY = (dx * TILT_MAX).toFixed(2);

        card.style.setProperty('--tilt-x', `${rotateX}deg`);
        card.style.setProperty('--tilt-y', `${rotateY}deg`);
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
    }

    function resetTilt(card) {
        card.style.transform = '';
        card.style.setProperty('--tilt-x', '0deg');
        card.style.setProperty('--tilt-y', '0deg');
    }

    document.querySelectorAll('.item[data-tilt]').forEach(card => {
        card.addEventListener('mousemove', (e) => applyTilt(card, e), { passive: true });
        card.addEventListener('mouseleave', () => resetTilt(card));
    });


    // =========================================================
    // 3. SKILL BADGE CONVERTER
    //    Converts comma-separated text into colorful pill badges
    // =========================================================

    const targetSections = ["Skills", "Technical Languages", "TechnicalLanguages", "Technical Skills"];

    targetSections.forEach(id => {
        const section = document.getElementById(id);
        if (!section) return;

        section.querySelectorAll('.item').forEach(item => {
            item.querySelectorAll('p').forEach(p => {
                const text = p.textContent.trim();
                if (text.includes(',')) {
                    const skills = text.split(',').map(s => s.trim()).filter(Boolean);
                    p.innerHTML = '';
                    skills.forEach(skill => {
                        const badge = document.createElement('span');
                        badge.className = 'skill-badge';
                        badge.textContent = skill;
                        p.appendChild(badge);
                    });
                }
            });
        });
    });


    // =========================================================
    // 4. SECTION ACTIVE TRACKING (for future TOC or nav use)
    // =========================================================

    const subjects = document.querySelectorAll('.subject');
    let activeSection = null;

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activeSection = entry.target.id;
            }
        });
    }, { threshold: 0.3 });

    subjects.forEach(s => sectionObserver.observe(s));


    // =========================================================
    // 5. HEADER NAME GRADIENT ANIMATION (parallax scroll)
    // =========================================================

    const heroName = document.querySelector('.name-zone h1');
    if (heroName) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const shift = Math.min(scrollY * 0.08, 30);
            heroName.style.backgroundPositionX = `${shift}%`;
        }, { passive: true });
    }


    // =========================================================
    // 6. CURSOR GLOW EFFECT (subtle radial glow follows cursor)
    // =========================================================

    const glow = document.createElement('div');
    glow.style.cssText = `
        position: fixed;
        top: 0; left: 0;
        width: 350px;
        height: 350px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 70%);
        pointer-events: none;
        z-index: 1;
        transform: translate(-50%, -50%);
        transition: opacity 0.5s ease;
        will-change: transform;
        mix-blend-mode: screen;
    `;
    document.body.appendChild(glow);

    let glowX = 0, glowY = 0;
    let targetX = 0, targetY = 0;

    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    }, { passive: true });

    // Smooth interpolated cursor glow
    function animateGlow() {
        glowX += (targetX - glowX) * 0.08;
        glowY += (targetY - glowY) * 0.08;
        glow.style.transform = `translate(calc(${glowX}px - 50%), calc(${glowY}px - 50%))`;
        requestAnimationFrame(animateGlow);
    }
    animateGlow();

});