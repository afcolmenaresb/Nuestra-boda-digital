window.onload = function() {
    const book = document.getElementById('book');
    const pageFlip = new StPageFlip(book, {
        width: 300,
        height: 450,
        size: "fixed",
        showCover: true
    });

    pageFlip.loadFromHTML(document.querySelectorAll(".page"));
    book.style.display = 'block';
};
