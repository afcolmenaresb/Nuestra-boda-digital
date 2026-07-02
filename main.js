document.addEventListener("DOMContentLoaded", function() {
    const bookElement = document.getElementById('book');
    
    // Inicializar el libro
    const pageFlip = new StPageFlip(bookElement, {
        width: 350,
        height: 500,
        size: "fixed",
        showCover: true,
        mobileScrollSupport: true
    });

    // Cargar las páginas
    pageFlip.loadFromHTML(document.querySelectorAll(".page"));

    // Una vez cargado, lo hacemos visible
    bookElement.style.display = 'block';
});
