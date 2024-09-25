            const swiper = new Swiper('.swiper-container', {
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                centeredSlides: true, // Center slides for better preview effect
                slidesPerView: 1.2, // Default to one slide per view
                spaceBetween: 30, // Adjust space between slides
                breakpoints: {
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    1025: {
                        slidesPerView: 3,
                        spaceBetween: 20, // Adjust space between slides for larger screens
                    },
                },
            });