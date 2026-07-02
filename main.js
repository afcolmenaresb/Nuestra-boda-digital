// main.js
window.addEventListener('load', function () {
    const pageFlip = new StPageFlip(document.getElementById('book'), {
        width: 350,
        height: 500,
        size: "fixed",
        showCover: true
    });

    pageFlip.loadFromHTML(document.querySelectorAll(".page"));
});
