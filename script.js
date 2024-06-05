// Animação ao Scrollar
document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.container .row');
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    elements.forEach(element => {
        if (element.offsetTop < (window.innerHeight + scrollTop)) {
            element.classList.add('appear');
        }
    });
});
