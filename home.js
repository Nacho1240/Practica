document.addEventListener("DOMContentLoaded", function () {
    let menuButton = document.getElementById("menuButton");
    let sidebar = document.getElementById("sidebar");
    let container = document.getElementById("menu-btn-container");
    let horizontalBar = document.querySelector('.navbar');
    let navegationLinks = document.querySelectorAll('.navigation-link');

    if (!menuButton || !sidebar || !container || !horizontalBar) {
        console.error("Uno o más elementos no se han encontrado en el DOM.");
        return;
    }

    // Función para verificar el espacio de la barra horizontal
    function checkHorizontalBarSpace() {
        if (horizontalBar.scrollWidth > horizontalBar.clientWidth || horizontalBar.offsetWidth <= 600) {
            container.classList.add('horizontal-bar-active'); 
        } else {
            container.classList.remove('horizontal-bar-active');
        }
    }

    document.addEventListener("click", function (event) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnMenuButton = menuButton.contains(event.target);

        if (!isClickInsideSidebar && !isClickOnMenuButton) {
            sidebar.classList.remove("active");
        }
    });

    // Cerrar sidebar al hacer clic en un link de navegación
    navegationLinks.forEach(link => {
        link.addEventListener("click", function () {
            sidebar.classList.remove("active");
        });
    });

    // Comprobar al cargar la página
    checkHorizontalBarSpace();

    // Comprobar cada vez que el tamaño de la ventana cambie
    window.addEventListener('resize', checkHorizontalBarSpace);
});
