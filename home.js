

document.addEventListener("DOMContentLoaded", function () {
    let menuButton = document.getElementById("menuButton");
    let sidebar = document.getElementById("sidebar");
    let container = document.getElementById("menu-btn-container");
    let horizontalBar = document.querySelector('.navbar');

    // Solo ejecutar si los elementos existen
    if (!menuButton || !sidebar || !container || !horizontalBar) {
        console.error("Uno o más elementos no se han encontrado en el DOM.");
        return;
    }

    // Función para verificar el espacio de la barra horizontal
    function checkHorizontalBarSpace() {
        if (horizontalBar.scrollWidth > horizontalBar.clientWidth || horizontalBar.offsetWidth <= 600) {
            container.classList.add('horizontal-bar-active'); // Activar contenedor cuando barra horizontal está activa o cuando el ancho es menor a 600px
        } else {
            container.classList.remove('horizontal-bar-active');
        }
    }
    
    // Comprobar al cargar la página
    checkHorizontalBarSpace();

    // Comprobar cada vez que el tamaño de la ventana cambie
    window.addEventListener('resize', checkHorizontalBarSpace);

    // Alternar el estado de la barra lateral (sidebar)
    menuButton.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Alternar la visibilidad de la barra lateral (sidebar) cuando se haga clic en el contenedor
    container.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
});
