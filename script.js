document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('#nav-menu a');

    links.forEach(link => {
        link.addEventListener('mouseenter', function () {
            this.style.backgroundColor = '#777'; // Change color on hover
        });

        link.addEventListener('mouseleave', function () {
            this.style.backgroundColor = ''; // Reset to original
        });
    });
});
