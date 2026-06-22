// Aether Agents AI landing page
document.querySelectorAll('.cta').forEach(btn => {
    btn.addEventListener('click', () => {
        if (window.gtag) {
            gtag('event', 'cta_click', { event_category: 'engagement' });
        }
    });
});
