
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('menu-mobile');
    const navList = document.querySelector('.botoes-topo');

    mobileMenuButton.addEventListener('click', function () {
        // Verifica se navList não está ativo antes de toggle a classe
        if (!navList.classList.contains('active')) {
            navList.classList.toggle('active');
        } else { // Use "else if" em vez de "else"
            mobileMenuButton.classList.toggle('hidden');
        }
    });
    
    document.addEventListener('click', function (event) {
        const isClickInside = navList.contains(event.target) || mobileMenuButton.contains(event.target);

        if (!isClickInside && navList.classList.contains('active')) {
            navList.classList.remove('active');
        }
    });
});



