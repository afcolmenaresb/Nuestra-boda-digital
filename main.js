window.addEventListener('load', () => {
    const book = document.getElementById('book');
    const bookWrapper = document.getElementById('book-wrapper');
    const envelopeScreen = document.getElementById('envelope-screen');
    const envelope = document.getElementById('envelope');
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');
    const dotsContainer = document.getElementById('page-dots');

    const pageFlip = new St.PageFlip(book, {
        width: 320,
        height: 480,
        size: 'stretch',
        minWidth: 260,
        maxWidth: 420,
        minHeight: 380,
        maxHeight: 620,
        maxShadowOpacity: 0.4,
        showCover: true,
        mobileScrollSupport: false
    });

    pageFlip.loadFromHTML(document.querySelectorAll('.page'));

    const pageCount = pageFlip.getPageCount();
    for (let i = 0; i < pageCount; i++) {
        const dot = document.createElement('span');
        if (i === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    }
    const dots = dotsContainer.querySelectorAll('span');

    const setActiveDot = (index) => {
        dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    };

    pageFlip.on('flip', (e) => setActiveDot(e.data));

    prevBtn.addEventListener('click', () => pageFlip.flipPrev());
    nextBtn.addEventListener('click', () => pageFlip.flipNext());

    const openInvitation = () => {
        envelope.classList.add('open');
        setTimeout(() => {
            envelopeScreen.classList.add('hidden');
            bookWrapper.classList.add('visible');
            pageFlip.update();
        }, 700);
    };

    envelope.addEventListener('click', openInvitation);
    envelope.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openInvitation();
        }
    });

    const rsvpForm = document.getElementById('rsvp-form');
    const rsvpThanks = document.getElementById('rsvp-thanks');
    rsvpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        rsvpForm.style.display = 'none';
        rsvpThanks.hidden = false;
    });
});
