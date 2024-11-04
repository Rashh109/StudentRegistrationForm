document.addEventListener('DOMContentLoaded', (event) => {
    const images = document.querySelectorAll('.photo img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            img.classList.toggle('enlarged');
        });
    });
});
