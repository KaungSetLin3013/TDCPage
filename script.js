const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

const themeToggle = document.querySelector('.nav-btn[data-scroll-to]') || null; // kept for compatibility

$$('[data-scroll-to]').forEach(btn => btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-scroll-to');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}));

document.getElementById('year').textContent = new Date().getFullYear();

// Make images visible if they loaded successfully, otherwise show fallback style
document.querySelectorAll('.project img.thumb').forEach(img => {
    img.addEventListener('error', () => {
        img.style.display = 'none';
        const fallback = img.nextElementSibling;
        if (fallback && fallback.classList && fallback.classList.contains('thumb-fallback')) {
            fallback.style.display = 'grid';
        }
    });
    img.addEventListener('load', () => {
        // hide fallback if any
        const fallback = img.nextElementSibling;
        if (fallback && fallback.classList && fallback.classList.contains('thumb-fallback')) {
            fallback.style.display = 'none';
        }
    });
});
