(function() {

    (function initSlides() {
        const cards = getData();
        drawSwiperSlides(cards);
        initSwiper();
    })();

    function getData() {
        return [
            { title: "this is a cat", picturePath: "user1.jpg", audioTitle: "may"},
            { title: "this is a dog", picturePath: "user2.jpg", audioTitle: "gav"},
            { title: "this is a bird", picturePath: "user3.jpg", audioTitle: "pii"}
        ]
    }

    function drawSwiperSlides(cards) {
        if (!cards || cards.length === 0)
            return;

        const swiperWrapper = document.getElementById('swiper-wrapper-id');
        for(var i = 0; i < cards.length; i++) {
            swiperWrapper.innerHTML += getSwiperSlide(cards[i].title, cards[i].picturePath, cards[i].audioTitle);
        }
    }

    function getSwiperSlide(title, picturePath, audioTitle, audiopath) {
        return `<div class="swiper-slide">
                    <div class="testmonialBox">
                        <div class="content">
                            <p class="slide-title">${title}</p>
                            <div class="img">
                                <img src="imgs/${picturePath}" width="200px" height="200px">
                            </div>
                            <div class="audio">
                                <p class="slide-audio-title">${audioTitle}</p>
                            </div>
                        </div>
                    </div>
                </div>`;
    }

    function initSwiper() {
        new Swiper('.swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows : false
            },
            loop: true,
        });
    }
})();
